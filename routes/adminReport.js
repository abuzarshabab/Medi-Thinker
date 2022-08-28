const express = require('express');
const router = express.Router();
const path = require ('path');


//for admin  report
router.use('/report', (req,res,next)=>{
   res.render('adminReport.ejs',{
     
  });
});

module.exports = router;