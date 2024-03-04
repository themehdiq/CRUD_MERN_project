const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()


const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.URI)
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB