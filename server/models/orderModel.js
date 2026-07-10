const { sql, poolPromise } = require("../config/db");


// Create order
const createOrder = async (user_id, total_amount) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("user_id", sql.Int, user_id)
        .input("total_amount", sql.Decimal(10, 2), total_amount)
        .query(`
            INSERT INTO orders (user_id, total_amount)
            OUTPUT INSERTED.id
            VALUES (@user_id, @total_amount)
        `);

    // SQL Server has no `insertId`; OUTPUT INSERTED.id returns the new row's id.
    return result.recordset[0].id;

};



// Add order items
const createOrderItem = async (
    order_id,
    book_id,
    quantity,
    price
) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("order_id", sql.Int, order_id)
        .input("book_id", sql.Int, book_id)
        .input("quantity", sql.Int, quantity)
        .input("price", sql.Decimal(10, 2), price)
        .query(`
            INSERT INTO order_items (order_id, book_id, quantity, price)
            VALUES (@order_id, @book_id, @quantity, @price)
        `);

    return result;

};



// Get orders by user
const getUserOrders = async (user_id) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("user_id", sql.Int, user_id)
        .query(`
            SELECT *
            FROM orders
            WHERE user_id = @user_id
            ORDER BY created_at DESC
        `);

    return result.recordset;

};



module.exports = {
    createOrder,
    createOrderItem,
    getUserOrders
};
