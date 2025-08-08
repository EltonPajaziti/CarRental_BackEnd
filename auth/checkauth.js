const jwt= require("jsonwebtoken");

require('dotenv').config();

const checkAuth=(req,res,next)=>{
    try{
        let token=null;
        //E merr nga cookie
            if(req.cookies?.token){
                token=req.cookies.token;
            }

            // E merr nga Header Authorization

            const authHeader= req.headers.authorization || "";
            if(!token && authHeader.startsWith("Bearer")){
                token=authHeader.slice(7);
            }

              if (!token) {
                     return res.status(401).json({ message: "Missing token" });
    }
     const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = { id: decoded.id };
    next();
    }catch(err){
        return res.status(401).json({message:"Invalid Token!"});
    }
};
module.exports=checkAuth;