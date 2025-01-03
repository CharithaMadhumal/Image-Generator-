import mongoose from 'mongoose';

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Madhumal:Madhu200@cluster0.kxopi.mongodb.net/image-generator').then(()=>console.log("Database connected"));

}