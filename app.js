const express =require('express')
const app = express()
const dotenv= require('dotenv/config')
const morgan= require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const { router } = require('json-server');

app.use(morgan("tiny"));
app.use(cors());
app.options("*",cors());



app.use(express.json());

mongoose.connect(process.env.CONNECTION_URL)

.then(()=>{
    console.log("Database connection is ready...")
}).catch((err)=>{
    console.log(err);
})

const productRoutes = require("./routes/products");
app.use(`/products`,productRoutes)


app.listen(process.env.PORT,()=> console.log(`app listening onn port ${process.env.PORT}`))
