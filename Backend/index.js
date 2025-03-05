const express=require('express');
const connectDB = require('./src/Database/db');
const ConnectDB = require('./src/Database/db');
const app=express();

require('dotenv').config({
    path:"./src/Database/db"
})

const PORT=process.env.port || 5000;
const url=process.env.db_url;
console.log(PORT)
app.get('/',(req,res)=>{
    res.send('Hello World');
})



app.listen(PORT,async()=>{
    try{
        await ConnectDB(url);
        console.log(`server is running on the port ${PORT}`);
    }
    catch(err){
        console.status(400).json({message:"servernot running",err})
    }
});