const express=require("express");

const router=express.Router();


const {

addBook,
books,
bookDetails,
editBook,
removeBook

}=require("../controllers/bookController");



router.post("/",addBook);


router.get("/",books);


router.get("/:id",bookDetails);


router.put("/:id",editBook);


router.delete("/:id",removeBook);



module.exports=router;