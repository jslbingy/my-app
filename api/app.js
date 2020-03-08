const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require(`cors`);
const jwt = require(`jsonwebtoken`);
const JWT_SECRET = require("./resources/global").JWT_SECRET;
const moment = require(`moment`);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let kickOutMap = new Map();
let userMap = new Map();
async function verifyToken(req, res, next) {
    req.token = req.headers[`authorization`] || ``;

    let kickOutTime = kickOutMap.get(req.token);
    if (kickOutTime) {
        let error = new Error(`You have been forced to logout by another person! ${kickOutTime}`);
        error.status = 401;
        kickOutMap.set(req.token, 0);
        return next(error);
    }
    jwt.verify(req.token, JWT_SECRET, function (err, decoded) {
        if (err) {
            err.status = 401;
            next(err);
        } else {
            req.user = decoded.data;
            let currentLogin = userMap.get(req.user.id);
            if (currentLogin) {
                if (currentLogin !== req.token) {
                    kickOutMap.set(currentLogin, moment().format(`DD/MM/YYYY HH:mm:ss`));
                }
            }
            userMap.set(req.user.id, req.token);
            next();
        }
    });
}

app.use("/api/general/account", require("./routes/1. general/1.1 login"));
app.use("/api/user_info/general", verifyToken, require("./routes/2. user_info/2.1 general_info"));
app.use("/api/user_info/allergen", verifyToken, require("./routes/2. user_info/2.3 allergen_info"));
app.use("/api/user_info/stroke", verifyToken, require("./routes/2. user_info/2.4 stroke_info"));

app.use(function (req, res, next) {
    console.log(`${req.method} -> ${req.originalUrl} is not a proper route!`);
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
