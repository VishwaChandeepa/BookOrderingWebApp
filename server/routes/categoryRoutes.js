const express=require("express");

const router=express.Router();


const {
    addCategory,
    categories
}=require("../controllers/categoryController");



router.post("/",addCategory);


router.get("/",categories);



module.exports=router;