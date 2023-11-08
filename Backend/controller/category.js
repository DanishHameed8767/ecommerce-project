const { Category } = require('../models/categoryModel');

exports.addCategory = async (req,res)=>{
    
    try {
     const category = new Category(req.body);
     await category.save();
         res.send(category);
 }
 catch (error){
     res.send(error);
 }
 }