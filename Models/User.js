const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName:{
      require:true,
      type:String,
  },
  userEmail:{
      require:true,
      type:String,
      unique:true,
  },
  userPwd:{
      require:true,
      type:String,
  },
  userContact:{
      require:false,
      type:String,
  },
  userDOB:{
      require:false,
      type:Date,
  }
//   productId: {
//       require: true,
//       type: mongoose.Types.ObjectId,
//       ref: 'Product'
//   }

});

module.exports = mongoose.model('User',userSchema);