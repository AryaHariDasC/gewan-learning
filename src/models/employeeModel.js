const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({
    firstname:{
        type:String ,required:true
    },
    lastname:{
        type:String
    },
    email:{
        type:String,required:true,unique:true
    }, 
    phone:{
        type:Number,required:true ,unique:true
    },
    age:{
        type:Number ,required:true
    },
    company:{
        type:String,required:true
    },
   
    
});
const Employee=mongoose.model('Employee',employeeSchema);
module.exports=Employee;