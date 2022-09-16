const { Category }=require("../models/category");
const express = require("express");
const router = express.Router();

//get
router.get(`/`, async (req,res)=>{
    const categoryList = await Category.find();
    if(!categoryList){
        res.status(500).json({success : false});
    }
    res.status(500).send(categoryList);
});

router.get(`/:id`, async (req,res)=>{
    const category = await Category.findById(req.params.id);
    if(!category){
        res 
        .status(500)
        .json({success : "The category with the given ID was not found"});
    }
    res.status(200).send(category);
});



// post

router.post(`/`,async(req,res)=>{
    let category = new Category({
        name:req.body.name,
        icon:req.body.icon,
        color:req.body.color,
    })

category=await category.save();
if (!category) return res.status(400).send("The category cannot be created");
res.send(category);
});

// update

router.put(`/:id`,async(req,res)=>{
    let category =  Category.findByIdAndUpdate(
        req.params.id,
        {
        name:req.body.name,
        icon:req.body.icon || category.icon,
        color:req.body.color,
    },
    {new : true}
);
    if (!category) return res.status(400).json("The category cannot be created!");
    res.status(200).json({category});
});


// delete


router.delete(`/:id`,async(req,res)=>{
    let category =  Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(400).json({msg : "The category is deleted!"})
    else return res.status(200).json({msg:"category is deleted!"})
    // res.send(category);
});




module.exports = router;