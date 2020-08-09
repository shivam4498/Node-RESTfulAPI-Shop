const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyparser=require('body-parser');
const mongoose= require('mongoose');
app.use(morgan('dev'));

const ordersRoutes=require('./api/routes/orders')
const productRoutes=require('./api/routes/products')

mongoose.connect('mongodb+srv://shivam_4498:'+ process.env.MONGO_ATLAS_PW +'@cluster0.czo1u.mongodb.net/shivam_4498?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,  
    useCreateIndex: true
})
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use((req,res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","*");
    if(req.method==='OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});}
        next();
});
app.use('/products',productRoutes);
app.use('/orders',ordersRoutes);
app.use((req, res, next)=>{
    const error= new Error('Not found the request');
    error.status=400;
    next(error);
    
})
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
       error:{ 
           message: error.message
        }
    });

});



module.exports = app;