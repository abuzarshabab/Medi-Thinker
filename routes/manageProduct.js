const express = require('express');
const router = express.Router();

const Product = require('../Models/Product');

//for admin/manageProduct

 //Get request
router.get('/manageProduct',(req,res,next) =>{

    Product.find()
    .then((product) => {
      res.render('manageProduct.ejs' , {
        product:product,
      });//End of Render()
      
    })//End of Then

    .catch((error) => {
       res.send(err);
    });//END OF CATCH
      
  });//END OF get
  
  router.get('/manageProduct/:productId',(req,res) =>{
    const productId = req.params.productId;
    Product.findById(productId)
    .then((product) => {
      res.render('productDetails.ejs',{
        product:product,
      })
    })
  })

  router.post('/manageProduct/searchProduct',(req,res) =>{
    
      const searchValue = req.body.searchValue;
      console.log(searchValue);
      Product.find({productName: {$regex: searchValue, $options: 'i'}} , (err, product) => {
         
          if(err)
          {
              console.log('err');
             
          }
         
          else if(product)
          {
              console.log('in the first if ');
              res.render('manageProduct',{ 
                  product: product,
                  msg: product.length +' Product found',
              });  
          }
          else
          {
             res.render('manageProduct', {
                product: product,
             });
          }
      });
  });

module.exports = router