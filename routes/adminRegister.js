const express = require('express');
const router = express.Router();

const Admin = require('../Models/Admin');
// for admin/register

router.get('/register' , (req,res,next) =>{
  res.render('adminRegister', {
    errStatus:'False',
  });  
});

router.post('/register',(req,res) =>{
    const adminName = req.body.adminName;
    const adminPwd1 =req.body.adminPwd1;
    const adminPwd2 = req.body.adminPwd2;
    const adminEmail =req.body.adminEmail;


    if(adminPwd1 === adminPwd2)
    {
      Admin.findOne({adminEmail : adminEmail} , (err,admin) => 
      {
        if(!admin)
        {
          const admin = new Admin
            ({
              adminName:adminName,
              adminEmail: adminEmail,
              adminPwd: adminPwd1,
            });

          admin.save()
          .then((admin) =>
          {
            console.log('User Registration Succes');
            console.log(admin);
            res.redirect('/admin/login');
          })
          .catch((err) =>
          {
            console.log(err);
            
          })
        }//End of !Admin if 
        else
        {
            res.render('user/register', {
            errStatus:'True',
            errMsg : 'Email Already Exist',
          })
        }//End of !admin else
        
      }) 
    }
    else
    {
      res.render('user/register', {
        errStatus:'True',
        errMsg : 'Password Does Not Match',
      })
    }
})


 module.exports = router;