const express = require('express');
const router = express.Router();

const Product = require('../Models/Product');
// /admin/

router.get('/sellProduct/:productId',(req,res) =>{
    const productId = req.params.productId;
    Product.findById(productId)
    .then((prod) => {
      res.render('sellProduct.ejs',{
        product:prod,
      })
    })
  })



module.exports = router;