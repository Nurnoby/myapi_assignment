// adding express 
const express=require('express');
// adding route 
const router=require("./src/routes/routes");
// creating express inst name app 
const app=new express();

// import security middleware 
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const hpp=require('hpp');
const cors=require('cors');

// implement security middleware 
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(rateLimit());

app.use("/api/v1",router)


// undefined route 
app.use('*',(req,res)=>{
    res.status(404).json({status:"Faild", data:"Request not found"});
});


// exporting app module 
module.exports=app;