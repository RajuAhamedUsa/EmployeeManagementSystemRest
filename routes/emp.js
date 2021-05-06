const express = require('express');
const router = express.Router();
const Emp = require("../model/employeemodel");


router.delete("/deleteById/:id",(req,res)=>{

    Emp.findByIdAndDelete({_id:req.params.id})
        .then((items)=>{
            if(!items){console.log('Data not found')}

            return res.json("Item deleted ")
        })
        .catch((err)=>{
            console.log(err)
        });
})


router.put("/editEmp",(req,res)=>{

    // Emp.findById(req.body._id)
    //     .then((emp)=>{
    //         console.log(emp)
    //     })
   const id = req.body._id;
   console.log(id + " Name " + req.body.Name)
   Emp.findByIdAndUpdate({_id:req.body._id},{
       $set:{Name:req.body.Name,DateOfBirth:req.body.DateOfBirth,Salary:req.body.Salary,
       Location:req.body.Location,DepartmentId:req.body.DepartmentId,PhoneNumber:req.body.PhoneNumber}
   })
       .then((item)=>{
           if(!item){
               return res.status(404).json({status: "Data not found"})
           }
           return res.json(item);
       })
       .catch((err)=>{
           console.log('Id Not found');
       })
})

router.post("/add",(req,res)=>{

    const newEmp = new Emp({
      Name:req.body.Name,
      DateOfBirth:req.body.DateOfBirth,
      Location:req.body.Location,
      Salary:req.body.Salary,
      DepartmentId:req.body.DepartmentId,
      PhoneNumber:req.body.PhoneNumber
    })

   newEmp.save()
       .then((emp)=> res.status(201).json(emp))
       .catch((err)=>{
         console.log(err)
       });

});

router.get("/getAll",(req,res)=>{

    Emp.find()
        .then((emp)=>{
            if(!emp){
                return res.status(404).json({msg:"Data not found"})
            }
            res.json(emp);
        })
        .catch((err)=>{

        })
})







module.exports = router;
