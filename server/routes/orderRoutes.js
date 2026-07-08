const express=require("express");

const router=express.Router();


const {
placeOrder,
orders

}=require("../controllers/orderController");



router.post("/",placeOrder);


router.get("/:user_id",orders);



module.exports=router;