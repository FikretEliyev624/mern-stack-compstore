const jwt=require("jsonwebtoken");

const authControl=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    jwt.verify(token, process.env.TOKEN_SECRET, (err,email) => {
        console.log(err);
        if (err) return res.status(403).send('token error on verification');
        req.email = email;
        next();
    })
  }


module.exports=authControl;