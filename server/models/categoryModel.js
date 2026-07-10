const { sql, poolPromise } = require("../config/db");


const createCategory = async (name) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("name", sql.NVarChar, name)
        .query(`
            INSERT INTO categories (name)
            VALUES (@name)
        `);

    return result;

};


const getCategories = async () => {

    const pool = await poolPromise;

    const result = await pool.request()
        .query("SELECT * FROM categories");

    return result.recordset;

};


module.exports = {
    createCategory,
    getCategories
};
