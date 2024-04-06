import  express  from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";




const app= express();

dotenv.config();
const PORT = process.env.PORT  || 5000;



// app.get("/",(req,res)=>{
//     res.send("hello world from abhay ")
// })

//to parse the incominf=g request with Json payload(from req.body)
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is rtunning  on server ${PORT}`)
});