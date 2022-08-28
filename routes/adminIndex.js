const express = require('express');
const router = express.Router();

const Product = require('../Models/Product');
const Admin = require('../Models/Admin');
const User =require ('../Models/User');

let admin;
Admin.find({}, (err,ad) => {
    admin = ad;
 
})

// cost Admin = require
//This is adminIndex page


router.get('/index', (req,res,next) => {

    Product.find()
    .then(product =>{
        prod = product;
        return User.find()
    })
    .then( user => {
          res.render('adminIndex',{
             user :user,
          });
    })
     .catch(err  => {
        res.send('some error happens');
        console.log(err);
     })

});


router.post('/index', (req,res,next) => {
  
    adminEmail = req.body.adminEmail;
    adminPwd = req.body.adminPwd;

    Admin.findOne({adminEmail: adminEmail , adminPwd : adminPwd}, (err,admin) =>{
        if(err)
        {
            console.log(err);
        }

        else if(!admin){
            res.render('adminLogin', {
                errMsg : 'Email or Password not match',
                errStatus : 'True',
             })
        }
        else        
        {
            Product.find()
            .then(product =>{
                prod = product;
                return User.find()
            })
           .then( user => {
                res.render('adminIndex',{
                user :user,
                admin:admin,
               
                });
            })
            .catch(err  => {
                res.send('some error happens');
                console.log(err);
            })
        }
    })

    
});


module.exports = router;
//user Home page
//routing `