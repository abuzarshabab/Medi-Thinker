const router = require('express').Router();

const Product =require('../Models/Product');

router.post('/submitProduct', (req , res) => {
    const product = new Product
  ({
      productName : req.body.productName,
      productComposition : req.body.productComposition,
      productImageUrl : req.body.productImageUrl,
      productType : req.body.productType,
      productCategory : req.body.productCategory,
      productMpp : Number(req.body.productMpp),
      productMrp : Number(req.body.productMrp),
      units :  Number(req.body.units),
      subUnit: Number(req.body.subUnit),
      subItem :Number(req.body.subItem),
      productExp: Date(req.body.productExp),
      productMfd:  Date(req.body.productExp),
      productDesc: req.body.productDesc,
  });
  product
  .save()
  .then((product) => {
      console.log(product);
       res.render('submitProduct',{
                status : 'Product Submitted successfully',
                product : product,
      })
  })
  .catch((err) =>{
     
      console.log(err);
  })
});

module.exports =router;