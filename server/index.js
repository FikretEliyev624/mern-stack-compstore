const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRouter=require("./Routers/userRouter");
const cors=require("cors")
const productRouter=require("./Routers/productRouter");
dotenv.config();

const app=express();
app.use(cors())
app.use(express.json());
app.use("/users",userRouter);
app.use("/products",productRouter);
app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connect to db")
})
.catch(err=>{
    console.log(err)
})
})

