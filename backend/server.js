const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser =require('body-parser')
const Authroute=require('./routes/auth')
const Employeeroute=require('./routes/employee')


mongoose.connect('mongodb://localhost:27017/login',{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection
db.on('error',(err)=>{
    console.log(err)
}
)
db.once('open',()=>{
    console.log('Data Base Connection Established')
}
)

const app=express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
const Port=process.env.Port || 3000
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.listen(Port,()=>{
    console.log('Server is running on port number '+Port)
})
app.use('/api/employee',Employeeroute)
app.use('/api/auth',Authroute)
app.use('/users',Authroute)