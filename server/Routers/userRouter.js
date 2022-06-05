const express=require("express");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const userModel=require("../models/userModel");
const jwt=require("jsonwebtoken");
const authToken=require("../middleware/authMiddleware")
const router=express.Router();



const maxAge=3*24*60*60*1000;

const createToken=(id)=>{
    return jwt.sign({id},process.env.TOKEN_SECRET,{
        expiresIn:maxAge
    })
}




router.post("/signup",async (req,res)=>{
    try {
        const {firstName,lastName,email,password}=req.body;
        const userExists=await userModel.findOne({email});
        if(userExists)
        return res.status(400).json({message:"User already exists"});
        const hashedPassword=await bcrypt.hash(password,12)

        const createUser=await userModel.create({
            firstName,
            lastName,
            email,
            password:hashedPassword
        })
       
        return res.status(201).json(createUser)

    } catch (error) {
        console.log(error);
        return res.json({message:"create user failed"})
    }
})
router.post("/login",async (req,res)=>{
    try {
        //const token=createToken(userModel._id)
        // res.cookie("jwt",token,{
        //     "httpOnly":true,
        //     "maxAge":maxAge
        // })
        const {email,password}=req.body
        const user= await userModel.findOne({email})
        if(!user)
        return res.status(400).json({message:"user does not exist"})
        const isPasswordCorrect=await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect)
        return res.status(400).json({message:"wrong Password"});

        const token=createToken(user._id)



       


        return res.status(200).json({token,email })
    


    }
    catch (error) {
        return res.status(400).json({message:error.message})
    }
})

router.get('/user', authToken, function(req,res){
    const email =req.email;
    const data=userModel.findOne(email);
    if(data){
        res.status(200).json(data);
    }
    res.status(401).send('Malformed Token')
})

module.exports=router;