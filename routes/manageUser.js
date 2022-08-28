const express = require('express');
const router = express.Router();

const User = require('../Models/User');

//for admin/manageUsee

 //Get request
router.get('/manageUser',(req,res,next) =>{

    User.find()
    .then((user) => {
      res.render('manageUser.ejs' , {
        user : user,
      });//End of Render()
      
    })//End of Then

    .catch((err) => {
       res.send(err);
    });//END OF CATCH
      
  });//END OF get
  
  // router.get('/manageUser/:userId',(req,res) =>{
  //   const userId = req.params.userId;
  //   Product.findById(userId)
  //   .then(() => {
  //     res.render('productDetails.ejs',{
  //       user:user,
  //     })
  //   })
  // })


module.exports = router