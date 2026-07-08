const {
addToCart,
getCart,
removeCart

}=require("../models/cartModel");



// Add item

const addItem = async(req,res)=>{

try{

const {
user_id,
book_id,
quantity
}=req.body;


await addToCart(
user_id,
book_id,
quantity
);


res.json({
message:"Added to cart"
});


}
catch(error){

res.status(500).json({
error:error.message
});

}

};



// View cart

const viewCart = async(req,res)=>{

try{

const data =
await getCart(req.params.user_id);


res.json(data);


}
catch(error){

res.status(500).json({
error:error.message
});

}

};



// Delete item

const deleteCartItem = async(req,res)=>{


try{

await removeCart(req.params.id);


res.json({
message:"Removed from cart"
});


}
catch(error){

res.status(500).json({
error:error.message
});

}


};


module.exports={
addItem,
viewCart,
deleteCartItem
};