const express = require(`express`);
const router = express.Router();
const dbConfig = require(`../../dbConfig`);
const connection = require(`../../helpers/connection`);
const query = require(`../../helpers/query`);
const rb = require(`../../helpers/response_builder`)

/**
 * API 2.3.1 first time enter user allergen info
 */
router.post(`/`, async function (req, res, next) {
    let con;
    try {
        con = await connection(dbConfig);
        let body = { ...req.body };
        let user = { ...req.user };
        for (let d in body.allergen) {
            let data = buildDao(d, user);
            let insert = await query(con, `insert into user_allergen set ?`, [data]);
        }
        res.json(rb.build({}, `allergen info saved`));
    } catch (err) {
        next(err);
    }
});

/**
 * API 2.3.2 get user allergen info
 */
router.get(`/`, async function (req, res, next) {
    let con;
    try {
        con = await connection(dbConfig);
        let user = { ...req.user };
        let allergens = await query(con, `select * from user_allergen where user_id = ?`, [user.id]);
        allergens = allergens[0];
        let result = ``;
        if (allergens.corn) result += `corn,`;
        if (allergens.egg) result += `egg,`;
        if (allergens.fish) result += `fish,`;
        if (allergens.meat) result += `meat,`;
        if (allergens.peanut) result += `peanut,`;
        if (allergens.shellfish) result += `shellfish,`;
        if (allergens.soy) result += `soy,`;
        if (allergens.tree_nut) result += `tree nut,`;
        if (allergens.wheat) result += `wheat,`;
        if (allergens.fpies) result += `fpies,`;
        res.json(rb.build({ exclude: result }, `Retrieved Successfully!`));
    } catch (err) {
        next(err);
    }
})

function buildDao(d, user) {
    let result = {
        user_id: user.id,
        allergen_id: d.allergen_id
    }
    return result;
}

module.exports = router;