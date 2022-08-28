const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    productName:{
        type: String,
        required:true,
    },
    productComposition:{
        type:String,
        required:true,
    },  
    productImageUrl:{
        type: String,
        required:true,
    },
    productType:{
        type: String,
        required:true,

    },
    productCategory:{
        type:String,
        required:true,
    },
    productMpp:{
        type: Number,
        required:true,
    },
    productMrp:{
        type:Number,
        required:true,
      
    },
    units:{
        type:Number,
        required:true,
      
    },
   
    subUnit:{
        type:Number,
        required:true,
      
    },
    subItem:{
        type:Number,
        required:false,
      
    },
    productMfd:{
        type:Date,
        required:false,
    },
    productExp:{
        type:Date,
        required:true,  
    },
    productDesc:{
        required:false,
        type:String,
    },
});

module.exports = mongoose.model('Product',productSchema);