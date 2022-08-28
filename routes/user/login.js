const express =require('express');
const router = express.Router();
const User = require('../../Models/User');

// This is for /user/login
router.get('/',(req,res,next)=> {
  res.render('user/login', {
    errStatus:'False',
    errMsg:'',
  });
});


module.exports = router;

