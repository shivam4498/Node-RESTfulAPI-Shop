const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const multer=require('multer'); 
const checkAuth=require('../middleware/check-auth');
const productController=require('../controllers/products');
 //const upload=multer({dest: 'uploads/'})

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads/');

    },
    filename: function(req,file,cb){

        // cb(null, new Date().toISOString()+file.originalname); // in the window system Date() generates the invalid file name so it will leave to the enoent error
        cb(null,  'shivam'+file.originalname);
    }
});
const fileFilter=(req, file, cb)=>{
    // reject a file
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true); 
    }else{
    cb(null, true);}
     // if we not send null it will lead to an error
};
const upload=multer({
 storage: storage,
 limits: {
    fileSize: 1024 * 1024 * 5
},
  fileFilter: fileFilter
});

const Product= require('../models/product');

router.get('/',productController.products_get_all);
router.post('/',checkAuth,upload.single('productImage'),productController.products_create_product);

router.get('/:productId',productController.products_get_product)
router.patch('/:productId',checkAuth,productController.products_update_product);

router.delete('/:productId', checkAuth,productController.products_delete)

module.exports = router;

