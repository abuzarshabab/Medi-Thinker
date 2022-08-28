const mongoose = require('mongoose');
const { text } = require('body-parser');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

    adminName : 
    {
      type :String,
      require:true,
    },
    adminPwd :
    {
        type : String,
        require : true,
    },
    adminEmail : {
       type : String,
       require : true,
    },
    adminContact :{
        type : Number,
        require : false,
    },
    adminDOB:{
        type:Date,
        require: false,
    },
    adminImageUrl:{
        type:String,
        require:false,
    }
})

module.exports = mongoose.model('Admin',adminSchema);
