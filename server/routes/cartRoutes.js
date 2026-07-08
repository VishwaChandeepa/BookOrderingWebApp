const express=require("express");

const router=express.Router();


const {
addItem,
viewCart,
deleteCartItem

}=require("../controllers/cartController");



router.post("/",addItem);


router.get("/:user_id",viewCart);


router.delete("/:id",deleteCartItem);



module.exports=router;