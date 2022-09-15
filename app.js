const express =require('express')
const app = express()
const dotenv= require('dotenv/config')
const morgan= require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


app.use(morgan("tiny"));
app.use(cors());

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
    console.log("Database connection is ready...")
}).catch((err)=>{
    console.log(err);
})



app.get('/',(req,res)=> res.send('hello'))
app.post('/post',(req,res)=>{
    res.send('started')
})

app.listen(process.env.PORT,()=> console.log(`app listening onn port ${process.env.PORT}`))
