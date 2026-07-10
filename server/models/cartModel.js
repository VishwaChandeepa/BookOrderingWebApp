const { sql, poolPromise } = require("../config/db");


// Add to cart
const addToCart = async (user_id, book_id, quantity) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("user_id", sql.Int, user_id)
        .input("book_id", sql.Int, book_id)
        .input("quantity", sql.Int, quantity)
        .query(`
            INSERT INTO cart (user_id, book_id, quantity)
            VALUES (@user_id, @book_id, @quantity)
        `);

    return result;

};



// Get user cart
const getCart = async (user_id) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("user_id", sql.Int, user_id)
        .query(`
            SELECT
                cart.id,
                books.title,
                books.price,
                cart.quantity
            FROM cart
            JOIN books
                ON cart.book_id = books.id
            WHERE cart.user_id = @user_id
        `);

    return result.recordset;

};



// Remove cart item
const removeCart = async (id) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("id", sql.Int, id)
        .query("DELETE FROM cart WHERE id = @id");

    return result;

};



module.exports = {
    addToCart,
    getCart,
    removeCart
};
