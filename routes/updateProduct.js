const express= require('express');
const router = express.Router();

const Product = require ('../Models/Product');
// for admin/updateProduct

router.get('/updateProduct',(req,res,next)=>{

    Product.find()
    .then((prod) => {

    
       res.render('updateProduct.ejs',{
          product :  prod,
        })
    })
    .catch((err) =>{
   console.log('error');
    });
});

router.get('/updateProduct/:productId',(req,res)=>{

    const productId = req.params.productId;
    Product.findById(productId)
    .then((product) =>{
       res.render('updateOneProduct',{
           product:product,
       });
    })
    .catch((err) =>{
      console.log(err)
    });
})
router.post('/updateOneProduct/:productId',(req,res)=>{
    const productId = areq.params.productId;
    console.log(productId);
    

  const updateProduct = {
      productName : req.body.productName,
      productComposition : req.body.productComposition,
      productImageUrl : req.body.productImageUrl,
      productType : req.body.productType,
      productCategory : req.body.productCategory,
      productMpp : Number(req.body.productMpp),
      productMrp : Number(req.body.productMrp),
      units :  Number(req.body.units),
      subUnit: Number(req.body.subUnit),
      subItem :   Number(req.body.subItem),
      productExp: Date(req.body.productExp),
      productMfd:  Date(req.body.productExp),
      productDesc: req.body.productDesc,
    };
    Product.findByIdAndUpdate(productId, updateProduct ,{upsert:true})
    .then((product) =>{
        res.redirect('/admin/updateProduct');
    })
    .catch((err) =>{
        console.log(err);
    })
});

module.exports = router;