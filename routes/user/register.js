const express = require('express');
const router = express.Router();

const User = require('../../Models/User');

router.get('',(req,res,next) => {

    res.render('user/register.ejs',{
        errStatus:'False',
        errMsg: '',
       
    });

});

router.post('',(req,res) => {
    

  if(req.body.userPwd1 === req.body.userPwd2)
    { 
      User.findOne({userEmail : req.body.userEmail},(err,user) =>{
        
        if(user)
        {
          res.render('user/register', {

            errStatus:'True',
            errMsg:'Email Already Exist',
            
          });
        }
        else if(err)
        {
          console.log(err);
          console.log ('in the err  ');
        }
        else
        {
          console.log('in the User method method');
          const user = new User({
          userName: req.body.userName,
          userEmail: req.body.userEmail,
          userPwd: req.body.userPwd1,
          })
       
          user.save()

          .then((user) =>{
            console.log(user);
            console.log ('New User added');
            res.redirect('/admin/login')
           })
          .catch((err) =>{
           console.log(err);
          });
        }
      });
    }
    else
    {
      console.log ('in the else method Password doess not match');
      res.render('user/register', {
        errStatus:'True',
        errMsg : 'Password Does Not Match',
      });
    }
   
}); 

module.exports = router;