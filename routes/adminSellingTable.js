const express = require('express');
const router = express.Router();

const Product = require('../Models/Product');

// for /admin/sellingProductTabel
 
router.get('/sellingTable',(req,res) =>{
  Product.find()
  .then((product) => {
    res.render('adminSellingTable.ejs' , {
      product:product,
    });//End of Render()
    
  })//End of Then

  .catch((error) => {
     res.send(err);
  });//END OF CATCH
    
});//END OF get

 router.post('/adminSellintTable/searchProduct',(req,res) =>{
   
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
             res.render('adminSellingProduct',{ 
                 product: product,
                 msg: product.length +' Product found',
             });  
         }
         else
         {
            res.render('adminSellingProduct', {
               product: product,
            });
         }
     });
 });


module.exports = router;