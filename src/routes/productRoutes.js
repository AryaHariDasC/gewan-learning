const express= require('express');
const productController=require('../controller/productController');
const router=express.Router();
router.post('/create',productController.createProduct);
router.get('/getAll',productController.getAllProducts);
module.exports=router;