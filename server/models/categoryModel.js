    const db = require("../config/db");


const createCategory = async(name)=>{

    const sql = `
    INSERT INTO categories(name)
    VALUES(?)
    `;

    const [result] = await db.query(
        sql,
        [name]
    );

    return result;

};


const getCategories = async()=>{

    const [rows] = await db.query(
        "SELECT * FROM categories"
    );

    return rows;

};


module.exports={
    createCategory,
    getCategories
};