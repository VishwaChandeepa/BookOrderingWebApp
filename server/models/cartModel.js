const db = require("../config/db");


// Add to cart

const addToCart = async(user_id,book_id,quantity)=>{

    const sql = `
    INSERT INTO cart
    (user_id,book_id,quantity)
    VALUES(?,?,?)
    `;


    const [result] = await db.query(
        sql,
        [user_id,book_id,quantity]
    );


    return result;

};



// Get user cart

const getCart = async(user_id)=>{

    const sql = `

    SELECT 
    cart.id,
    books.title,
    books.price,
    cart.quantity

    FROM cart

    JOIN books
    ON cart.book_id = books.id

    WHERE cart.user_id=?

    `;


    const [rows] = await db.query(
        sql,
        [user_id]
    );


    return rows;

};



// Remove cart item

const removeCart = async(id)=>{


    const [result] = await db.query(
        "DELETE FROM cart WHERE id=?",
        [id]
    );


    return result;

};



module.exports={
    addToCart,
    getCart,
    removeCart
};