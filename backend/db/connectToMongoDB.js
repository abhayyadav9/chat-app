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

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Remove the deprecated options
            // useFindAndModify: false
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process if unable to connect
    }
};

export default connectToMongoDB;
