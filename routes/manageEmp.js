const express = require('express');
const router = express.Router();

const Admin = require('../Models/Admin.js');
const User = require('../Models/User.js');
//This is for admin/manageEmp

router.use('/manageEmp', (req,res,next) => {
    Admin.find()
    .then((admin) =>{
          res.render('manageEmp.ejs',{
              admin:admin,
          });
    })
    .catch((err) =>{
         console.log('err');
    })
});

module.exports = router;