const express = require('express');
const router = express.Router();
const Product = require('../../Models/Product');

router.use('/health',(req,res,next) => {
    Product.find({productCategory:'health'},(err,product) =>{
        res.render('user/allProducts.ejs',{
            prod:product,
            msg:'Showing Health Product'
        });    
    })
});

router.use('/muscle',(req,res,next) => {
    Product.find({productCategory:'muscleGain'},(err,product) =>{
        res.render('user/allProducts.ejs',{
            prod:product,
            msg:'Showing Muscle Gain Product'
        });    
    })
});

module.exports = router;