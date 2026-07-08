const db = require("../config/db");


const createUser = async(name,email,password,role)=>{

    const sql = `
    INSERT INTO users
    (name,email,password,role)
    VALUES(?,?,?,?)
    `;

    const [result] = await db.query(
        sql,
        [name,email,password,role]
    );

    return result;

};


const findUserByEmail = async(email)=>{

    const sql = `
    SELECT * FROM users
    WHERE email = ?
    `;

    const [rows] = await db.query(
        sql,
        [email]
    );

    return rows[0];

};


module.exports={
    createUser,
    findUserByEmail
};