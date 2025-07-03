const Employee=require('../models/employeeModel');


exports.createEmployee = async (req, res) => {
    try {
        console.log(req.body);
        const { firstname, lastname, email, phone, age, company } = req.body;
        const employee = new Employee({ firstname, lastname, email, phone, age, company });
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Error creating employee', error: error.message });
}
};
exports.getAllEmployee =async(req,res)=>{
    try{
        console.log("Getting all employees");
        const employees=await Employee.find();
        res.status(200).json({message:'Employee retrived sucessfully',employees});
    }catch(error){
        res.status(500).json({message:'Error in retriving Employees',error:error.message});
    }
};

exports.updateEmployee=async(req,res)=>{
    try{
        const {id}=req.params;
        const updateData=req.body;
        const employee=await Employee.findByIdAndUpdate(id,updateData);
        if(!employee){
           return res.status(404).json({message:"Employee not found"});
        }
        res.status(202).json({message:"Employee updated sucessfully",employee });
    }catch(error){
        res.status(500).json({message:"Found error in updation",error:error.message})
    }
}
exports.deleteEmployee=async(req,res)=>{
    
    try{
         const{id}=req.params;
         const employee=await Employee.findByIdAndDelete(id);
         if(!employee){
            return res.status(404).json({message:'Employee not fond'});
         }
         res.status(200).json({message:'Employee deleted successfully',employee});
    }catch(error){
        res.status(500).json({message:'Error found in deleting employee',error:error.message});
    }
}