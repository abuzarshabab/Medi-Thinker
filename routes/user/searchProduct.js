const express = require('express');
const router = express.Router();
const Product = require('../../Models/Product');


router.get('/',(req,res,next) => {
    const searchValue = req.query.searchValue;
    console.log(searchValue);
    Product.find({productName: {$regex: searchValue, $options: 'i'}} , (err, product) => {
       
        if(err)
        {
            console.log('err');
           
        }
       
        else if(product)
        {
            res.render('user/searchProduct',{ 
                prod: product,
                msg: product.length +' Product found',
            });  
        }
        else
        {
           console.log(product);
           res.render('user/searchProduct', {
            product: product,
            errStatus:'False',
            errMsg:'Product Found',
        });
        }
    });
});

module.exports = router;