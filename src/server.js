const express=require('express');
const connectDb=require('./config/db')
const employeeRoutes=require('./routes/employeeRoutes')
require('dotenv').config();

const app=express();

connectDb();
app.use(express.json())
app.use('/employees',employeeRoutes);
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is running on port${PORT}`);
});
