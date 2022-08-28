const express = require('express');
const router = express.Router();
var health, muscle;
const User = require('../../Models/User');
const Product = require('../../Models/Product');

//user/index
// localhost
// /user
router.get('',(req,res,next) => {
    Product.find({productCategory:'Health'})
    .then(health =>{
        hea = health;
        return Product.find({productCategory: 'Protective'})
     })
     .then( pro => {
        res.render('user/userIndex',{
            protective : pro,
            health : hea,
        });
     })
     .catch(err  => {
        res.send('some error happens');
        console.log(err);
     })    
});


router.post('',(req,res) => {
  const userEmail = req.body.userEmail;
  const userPwd = req.body.userPwd;
  console.log(userEmail , userPwd);

  User.findOne({userEmail:userEmail ,userPwd:userPwd}, (err, user) => {
      console.log(user);

      if(err)
      {
          console.log(err);

      } 
      else if(user)
       {
        Product.find({productCategory:'Health'})
        .then(health =>{
            hea = health;
            return Product.find({productCategory:'Protective'})
         })
         
         .then( pro => {
            res.render('user/userIndex',{
                protective : pro,
                health : hea,
            });
         })
         .catch(err  => {
            res.send('some error happens');
            console.log(err);
         })
       } 
      else
      {
        res.render('user/login', {
            errMsg : 'Email or Password not match',
            errStatus : 'True',
        
        });
      } 
  })
   
})
module.exports = router;