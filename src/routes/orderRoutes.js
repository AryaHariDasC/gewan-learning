const express= require('express');
const orderController=require('../controller/orderController');
const router=express.Router();
router.post('/create',orderController.orderCreate);
router.get('/getDetails/:id',orderController.getOrderDetails)
module.exports=router;