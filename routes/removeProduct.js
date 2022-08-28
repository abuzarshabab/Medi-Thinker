const express= require('express');
const router = express.Router();
const Product = require ('../Models/Product.js')

// for admin/removeProduct

router.get('/removeProduct',(req,res,next)=>{
  Product.find()
  .then((product) =>{
    res.render('removeProduct.ejs',{
             product:product,
    });
  })
  .catch((err) => {
        console.log(err);
  })
});
router.get('/removeProduct/:productId' ,(req,res)=>{
    
    const productId = req.params.productId;
 

    Product.findByIdAndDelete(productId)
    .then((product) => {
      console.log('product deletion success');
       res.redirect('/admin/removeProduct'); 
    })
    .catch((err) =>{
        console.log('Connot Delete Product')
    });
})

module.exports = router;