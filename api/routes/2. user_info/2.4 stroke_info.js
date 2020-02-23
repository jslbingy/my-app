const express = require(`express`);
const router = express.Router();
const dbConfig = require(`../../dbConfig`);
const connection = require(`../../helpers/connection`);
const query = require(`../../helpers/query`);
const rb = require(`../../helpers/response_builder`)

/**
 * API 2.4.1 first time enter user stroke info
 */
router.post(`/`, async function (req, res, next) {
    let con;
    try {
        con = await connection(dbConfig);
        let body = { ...req.body };
        let user = { ...req.user };
        let data = buildDao(body);
        let insert = await query(con, `update user_stroke set ? where user_id = ?`, [data, user.id]);
        res.json(rb.build({}, `stroke info saved`));
    } catch (err) {
        next(err);
    }
});

function buildDao(body) {
    let result = {
        is_hypertension: body.hypertension === 'Yes' ? true : false,
        is_heart_disease: body.heart_disease === 'Yes' ? true : false,
        work_type: body.work_type,
        residence_type: body.residence_type,
        avg_glucose_level: body.agl ? body.agl : null,
        smoking_status: body.smoking_status
    }
    return result;
}

module.exports = router;