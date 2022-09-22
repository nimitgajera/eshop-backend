const express =require('express')
const app = express()
const dotenv= require('dotenv/config')
const morgan= require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser= require('body-parser');
// const authJwt = require("./helpers/jwt");

app.use(bodyparser.json());
app.use(morgan("tiny"));
app.use(cors());
app.options("*",cors());
// app.use(authJwt());

mongoose.connect(process.env.CONNECTION_URL)

.then(()=>{
    console.log("Database connection is ready...")
}).catch((err)=>{
    console.log(err);
})

const productRoutes = require("./routes/products");
app.use(`/products`,productRoutes)

const categoriesRoutes = require("./routes/categories");
app.use(`/categories`,categoriesRoutes)

const usersRoutes = require("./routes/users");
app.use(`/users`,usersRoutes)

const ordersRoutes = require("./routes/orders");
app.use(`/orders`,ordersRoutes)


app.listen(process.env.PORT,()=> console.log(`app listening onn port ${process.env.PORT}`))
