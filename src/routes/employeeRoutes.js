const express=require('express');
const router=express.Router();
const employeeController=require('../controller/employeeController');
router.post('/create', employeeController.createEmployee);
router.get('/getAll', employeeController.getAllEmployee);
router.put('/update/:id',employeeController.updateEmployee);
router.delete('/delete/:id',employeeController.deleteEmployee);
module.exports=router;