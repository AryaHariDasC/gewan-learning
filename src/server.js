const express=require('express');
const connectDb=require('./config/db')
const employeeRoutes=require('./routes/employeeRoutes')
const productRoutes=require('./routes/productRoutes');
const orderRoutes=require('./routes/orderRoutes')
const lookupRoutes=require('./routes/lookupRoutes')
require('dotenv').config();

const app=express();

connectDb();
app.use(express.json())
app.use('/employees',employeeRoutes);
app.use('/product',productRoutes);
app.use('/order',orderRoutes);
app.use('/lookup',lookupRoutes);
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is running on port${PORT}`);
});
