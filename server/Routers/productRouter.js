const router=require("express").Router();
const productModel=require("../models/productModel");
const Product=require("../models/productModel");

router.get('/',async (req,res)=>{

    const PAGE_SIZE = 6;
    const pageQuery=req.query.page
  const page = parseInt(pageQuery || "0");
  const total = await Product.countDocuments({});
  const posts = await Product.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);
 



    const productModel1=productModel.find().exec()
    /*.then((error)=>{
        if(error) return res.status(400).json({status:false,error});
        
    })*/
    return res.status(200).json({
        productModel1,
        status:true,
        message:"Get Product Successfully",
        totalPages: Math.ceil(total / PAGE_SIZE),
        posts
    })
})

router.post("/create",(req,res)=>{
    const product=new productModel(req.body)
    product.save((error,data)=>{
    if(error) return res.status(400).json({status:false,error});
        return res.status(200).json({
            status:true,
            message:"Product has been added Successfully",
            data
        })
    })
})


module.exports=router;