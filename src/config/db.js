const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongodb connected Successfully');
    }
    catch(error){
        console.error('MondoDB connection failed',error.message);
        process.exit(1);
    }
}
module.exports=connectDB ;
