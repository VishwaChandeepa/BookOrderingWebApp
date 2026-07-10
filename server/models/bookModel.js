const { sql, poolPromise } = require("../config/db");


// Create book
const createBook = async (data) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("title", sql.NVarChar, data.title)
        .input("description", sql.NVarChar, data.description)
        .input("price", sql.Decimal(10, 2), data.price)
        .input("image", sql.NVarChar, data.image)
        .input("author_id", sql.Int, data.author_id)
        .input("category_id", sql.Int, data.category_id)
        .query(`
            INSERT INTO books
            (title, description, price, image, author_id, category_id)
            VALUES (@title, @description, @price, @image, @author_id, @category_id)
        `);

    return result;

};



// Get all books
const getBooks = async () => {

    const pool = await poolPromise;

    const result = await pool.request()
        .query(`
            SELECT
                books.*,
                categories.name AS category
            FROM books
            LEFT JOIN categories
                ON books.category_id = categories.id
        `);

    return result.recordset;

};



// Get one book
const getBookById = async (id) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM books WHERE id = @id");

    return result.recordset[0];

};



// Update book
const updateBook = async (id, data) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("id", sql.Int, id)
        .input("title", sql.NVarChar, data.title)
        .input("description", sql.NVarChar, data.description)
        .input("price", sql.Decimal(10, 2), data.price)
        .input("image", sql.NVarChar, data.image)
        .input("category_id", sql.Int, data.category_id)
        .query(`
            UPDATE books
            SET title = @title,
                description = @description,
                price = @price,
                image = @image,
                category_id = @category_id
            WHERE id = @id
        `);

    return result;

};



// Delete book
const deleteBook = async (id) => {

    const pool = await poolPromise;

    const result = await pool.request()
        .input("id", sql.Int, id)
        .query("DELETE FROM books WHERE id = @id");

    return result;

};



module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
};
