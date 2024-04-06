import  express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";




import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js"



import connectToMongoDB from "./db/connectToMongoDB.js";




const app= express();

dotenv.config();
const PORT = process.env.PORT  || 5000;

//to parse the incominf=g request with Json payload(from req.body)
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes)


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is rtunning  on server ${PORT}`)
});