const express =require('express');
const router = express.Router();

router.use('',(req,res,next) => {
  res.render('user/product.ejs',{

  });

});

module.exports = router;