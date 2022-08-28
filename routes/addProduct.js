const express = require('express');
const router =  express.Router();

// for admin/addProduct
router.get('/addProduct', ( req , res ) =>{
  res.render('addProduct.ejs',{
    
  });
});


module.exports = router;