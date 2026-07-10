const { sql, poolPromise } = require("../config/db");


const createUser = async (name, email, password, role) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("name", sql.NVarChar, name)
        .input("email", sql.NVarChar, email)
        .input("password", sql.NVarChar, password)
        .input("role", sql.NVarChar, role)
        .query(`
            INSERT INTO users (name, email, password, role)
            VALUES (@name, @email, @password, @role)
        `);

    return result;

};


const findUserByEmail = async (email) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("email", sql.NVarChar, email)
        .query(`
            SELECT * FROM users
            WHERE email = @email
        `);

    return result.recordset[0];

};


module.exports = {
    createUser,
    findUserByEmail
};
