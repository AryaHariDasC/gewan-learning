const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    productname:{
        type:String,required:true
    },
    brand:{type:String,required:true},
    price:
    {type:Number,required:true},
    stock:{
        type:Number,required:true
    }

});
const Product=mongoose.model('Product',productSchema);
module.exports=Product