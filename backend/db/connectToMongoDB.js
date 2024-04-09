// import mongoose from "mongoose";

// const connectToMongoDB=async()=>{
//     try{
//         await mongoose.connect(process.env.MONGO_DB_URI);
//         console.log("connected to mongo db")
//     }catch(error){
//         console.log("errot to connecting with  data base",error.message)

//     }
// }
// export default connectToMongoDB;
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const connectToMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGO_DB_URI; // Access MongoDB URI from environment variables
        console.log("MongoDB URI:", mongoURI); // Log MongoDB URI

        // Check if the URI is not undefined
        if (!mongoURI) {
            throw new Error("MongoDB URI is not defined in the environment variables.");
        }

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process if unable to connect
    }
};

export default connectToMongoDB;
