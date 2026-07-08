const db = require("../config/db");


// Create book
const createBook = async(data)=>{

    const sql = `
    INSERT INTO books
    (title,description,price,image,author_id,category_id)
    VALUES(?,?,?,?,?,?)
    `;


    const [result] = await db.query(
        sql,
        [
            data.title,
            data.description,
            data.price,
            data.image,
            data.author_id,
            data.category_id
        ]
    );


    return result;

};



// Get all books
const getBooks = async()=>{

    const sql = `
    SELECT 
    books.*,
    categories.name AS category

    FROM books

    LEFT JOIN categories
    ON books.category_id = categories.id
    `;


    const [rows] = await db.query(sql);

    return rows;

};



// Get one book

const getBookById = async(id)=>{

    const [rows] = await db.query(
        "SELECT * FROM books WHERE id=?",
        [id]
    );

    return rows[0];

};



// Update book

const updateBook = async(id,data)=>{

    const sql = `
    UPDATE books

    SET title=?,
    description=?,
    price=?,
    image=?,
    category_id=?

    WHERE id=?
    `;


    const [result] = await db.query(
        sql,
        [
            data.title,
            data.description,
            data.price,
            data.image,
            data.category_id,
            id
        ]
    );


    return result;

};



// Delete book

const deleteBook = async(id)=>{

    const [result] = await db.query(
        "DELETE FROM books WHERE id=?",
        [id]
    );


    return result;

};



module.exports={
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
};