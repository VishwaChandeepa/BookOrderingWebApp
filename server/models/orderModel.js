const db = require("../config/db");


// Create order

const createOrder = async(user_id,total_amount)=>{

    const sql = `
    INSERT INTO orders
    (user_id,total_amount)
    VALUES(?,?)
    `;


    const [result] = await db.query(
        sql,
        [user_id,total_amount]
    );


    return result.insertId;

};



// Add order items

const createOrderItem = async(
order_id,
book_id,
quantity,
price
)=>{


    const sql = `
    INSERT INTO order_items
    (order_id,book_id,quantity,price)
    VALUES(?,?,?,?)
    `;


    const [result] = await db.query(
        sql,
        [
            order_id,
            book_id,
            quantity,
            price
        ]
    );


    return result;

};



// Get orders by user

const getUserOrders = async(user_id)=>{


    const sql = `

    SELECT *

    FROM orders

    WHERE user_id=?

    ORDER BY created_at DESC

    `;


    const [rows]=await db.query(
        sql,
        [user_id]
    );


    return rows;

};



module.exports={
createOrder,
createOrderItem,
getUserOrders
};