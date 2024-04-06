import jwt from "jsonwebtoken";

const generateTokenAndSetCookie=(userId,res)=>{
    const token =jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    });

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, //ms
        httpOnly:true, // prevent xss attack(cross site scriptings attackes)
        sameSite:"strict",// prvent csrf attact cross site request forgery attack
        secure: process.env.NODE_ENV !=="development"
    })                     
}

export default generateTokenAndSetCookie;