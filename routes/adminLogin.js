const express = require('express');
const router = express.Router();
const path = require ('path');

// for admin/login

router.get('' , (req,res,next) =>{
  res.render('adminLogin', {
       errStatus:false,
       errMsg:'',
  });  
});



 module.exports = router;