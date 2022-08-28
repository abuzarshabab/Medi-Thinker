const express = require('express');
const router = express.Router();

const Product = require('../Models/Product');
// /admin/


router.post('/billingReciept/:productId', (req,res) =>{
  
    const productId = req.params.productId;

    const sellingQuantity = Number(req.body.sellingQuantity);
    const customerName = req.body.customerName;

    // console.log(sellingQuantity)
    // console.log(customerName)
    // console.log(productId);
    
    Product.findById(productId)
    .then(prod =>{
       
       res.render('billingReciept' , {
          product:prod,
          customerName:customerName,
          sellingQuantity:sellingQuantity,
          totalAmount:prod.productMrp*sellingQuantity,
        })
    })
    .catch(err =>{
        console.log(err);
    })
    
    const updateProduct = {
        units : (prod.units-sellingQuantity)
    }
    Product.findByIdAndUpdate(productId, updateProduct,{upsert:true});
})

module.exports = router;