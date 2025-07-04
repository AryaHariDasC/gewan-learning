const express=require('express')
const router=express.Router();
const lookupController=require('../controller/lookupController');
router.get('/get/:employee_id',lookupController.getOrdersWithDetails);
module.exports=router;