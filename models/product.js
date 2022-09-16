const mongoose = require("mongoose");



const productschema = mongoose.Schema({
    name : String,
    image : String,
    countInStock:{
        type:Number,
        required:true
    }
})


exports.Product = mongoose.model(`product`,productschema)