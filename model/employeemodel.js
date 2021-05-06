const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema= new Schema({
    Name:{type:String,required:true},
    DateOfBirth:{type:String,required:true},
    Location:{type:String,required:true},
    Salary:{type:Number,required:true},
    DepartmentId:{type:Number,required:true},
    PhoneNumber:{type:Number,required:true}
})

module.exports = Employee = mongoose.model("Employee",EmployeeSchema);
