import  express  from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import e from "express";

const app= express();

dotenv.config();
const PORT = process.env.PORT  || 5000;



// app.get("/",(req,res)=>{
//     res.send("hello world from abhay ")
// })

//to parse the incominf=g request with Json payload(from req.body)
app.use(express.json())
app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is rtunning  on server ${PORT}`)
});