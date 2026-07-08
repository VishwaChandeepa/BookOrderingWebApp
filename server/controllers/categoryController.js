const {
    createCategory,
    getCategories
}=require("../models/categoryModel");


// Add category

const addCategory = async(req,res)=>{

    try{

        const {name}=req.body;

        await createCategory(name);

        res.json({
            message:"Category created"
        });

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};



// Get categories

const categories = async(req,res)=>{

    try{

        const data = await getCategories();

        res.json(data);

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};


module.exports={
    addCategory,
    categories
};