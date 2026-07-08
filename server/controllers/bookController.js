const {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook

}=require("../models/bookModel");



// Add book

const addBook = async(req,res)=>{

    try{

        await createBook(req.body);


        res.json({
            message:"Book added successfully"
        });

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};




// Get books

const books = async(req,res)=>{

    try{

        const data = await getBooks();

        res.json(data);

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};




// Single book

const bookDetails = async(req,res)=>{

    try{

        const book =
        await getBookById(req.params.id);


        res.json(book);

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};




// Update

const editBook = async(req,res)=>{

    try{

        await updateBook(
            req.params.id,
            req.body
        );


        res.json({
            message:"Book updated"
        });

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};




// Delete

const removeBook = async(req,res)=>{

    try{

        await deleteBook(req.params.id);


        res.json({
            message:"Book deleted"
        });

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};



module.exports={
    addBook,
    books,
    bookDetails,
    editBook,
    removeBook
};