const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();




//Local packages
//Admin package
const adminReport = require ('./routes/adminReport.js');
const adminLogin = require('./routes/adminLogin.js');
const adminIndex = require('./routes/adminIndex.js');
const manageEmp = require('./routes/manageEmp.js');
const manageUser =require('./routes/manageUser.js');
const manageProduct = require('./routes/manageProduct.js')
const addProduct = require('./routes/addProduct.js');
const removeProduct = require('./routes/removeProduct.js');
const updateProduct = require('./routes/updateProduct.js');
const submitProduct = require('./routes/submitProduct');
const adminRegister = require('./routes/adminRegister');
const adminSellingTable = require('./routes/adminSellingTable');
const billingReciept = require('./routes/billingReciept');
const sellProduct = require('./routes/sellProduct');

//User package
const userIndex = require('./routes/user/userIndex');
const productPage = require('./routes/user/product.js');
const userLogin = require('./routes/user/login.js');
const userRegister = require('./routes/user/register.js');
const searchProduct = require('./routes/user/searchProduct.js');
const allProducts = require('./routes/user/allProduct.js');
app.use(bodyParser.urlencoded({extended:false}));

app.set ('view engine', 'ejs');
app.set ('views','views');

// For DataBase connectivity
mongoose
.connect('mongodb://localhost:27017/MediThinker',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then((result) => {
    console.log('Database Online.');
    app.listen(3000);
})
.catch((err) => {
    console.log(err);
});

app.use(express.static(path.join(__dirname, 'public')));



//for admin Routes


app.use('/admin',adminIndex);

app.use('/admin',adminReport);

app.use('/admin',manageProduct);

app.use ('/admin',manageEmp);

app.use('/admin',manageUser);

app.use('/admin',addProduct);

app.use('/admin',removeProduct);
    
app.use('/admin',updateProduct);

app.use('/admin',submitProduct);

app.use('/admin',adminRegister)

app.use('/admin',adminSellingTable);

app.use('/admin',sellProduct);

app.use('/admin',billingReciept);

app.use('/admin/login',adminLogin);
app.use('/admin',adminLogin);



//for User Routes
app.use('/product',productPage);

app.use('/user/login',userLogin);

app.use('/user/register',userRegister);

app.use ('/user/index',userIndex);

app.use ('/user/searchProduct',searchProduct);

app.use ('/user/allProducts',allProducts);
app.use('/user' ,userLogin)
app.use ('/',userIndex);

