const {
createOrder,
createOrderItem,
getUserOrders

}=require("../models/orderModel");




// Place order

const placeOrder = async(req,res)=>{

try{


const {
user_id,
items,
total_amount
}=req.body;



const order_id =
await createOrder(
user_id,
total_amount
);



for(let item of items){

await createOrderItem(

order_id,

item.book_id,

item.quantity,

item.price

);

}



res.json({

message:"Order placed successfully",

order_id

});



}
catch(error){

res.status(500).json({
error:error.message
});

}


};





// View orders

const orders = async(req,res)=>{


try{


const data =
await getUserOrders(
req.params.user_id
);


res.json(data);



}
catch(error){

res.status(500).json({
error:error.message
});

}



};



module.exports={
placeOrder,
orders
};