const mongoose=require("mongoose");


const productSchema=mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Specifications:{
        type:String,
        required:true
    },
    
    Price:{
        type:Number,
        required:true
    }
})
    const Product=mongoose.model("Product",productSchema)
module.exports=Product