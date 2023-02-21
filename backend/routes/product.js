const Product = require('../models/Product')
const router = require('express').Router();

router.post('/',async(req,res)=>{
    const newProduct = new Product(req.body)
    try{
    const savedProduct =  await newProduct.save();
    res.status(201).json(savedProduct)
    }catch(err){
       res.status(500).json(err)
    }
})

router.get('/',async(req,res)=>{
   
    try{
        let products
    
        products = await Product.find()
    
     
     res.status(200).json(products)
    }catch(err){
      res.status(500).json(err)
    }
  })

module.exports=router