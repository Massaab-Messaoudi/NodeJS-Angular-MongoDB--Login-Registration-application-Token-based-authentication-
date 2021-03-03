const { response } = require('express')
const Employee = require('../models/Employee')
//show the list of the employees
const index=(req,res,next)=>
{
    Employee.find()
    .then(response=>
        {
            res.json({response})
        })
    .catch(error=>
        {
            res.json({message :'Error has been occured'})
        })    
}
// show a spesific emloyee
const show =(req,res,next)=>
{
   let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    then(response=>{
        res.json(response)
    })
    .catch(error=>{
        res.json({message:'Error has benn occured '})
    })
}
// store a new employee in the data base
const store =(req,res,next)=>
{
 let employee=new Employee({    
 name:req.body.name,
 email:req.body.email,
 age:req.body.age
 })
 employee.save()
 .then(response=>
    {
        res.json({message:'Employee added sucussfully'})
    })
  .catch(error=>
    {
        res.json({message:'Error has been occured'})
    })   
}

//update an employee
const update=(req,res,next)=>
{
    let employeeID =req.body.employeeID
    let UpdatedData =
    {
        name :req.body.name,
        email :req.body.email,
        age :req.body.age
    }
   Employee.findByIdAndUpdate(employeeID,{$set:UpdatedData})  
   .then(()=>{res.json({message:'Employee has been updated'})})
   .catch(error=>res.json({message:'Error has been occured'}))
} 
module.exports={ index , show, store, update}