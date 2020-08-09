const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const Product= require('../models/product');
const product = require('../models/product');

router.get('/',(req,res, next)=>{
    product.find().exec().then(docs=>{
       
    console.log(docs);
        // if(docs.length>=0){
            res.status(200).json(docs);
        // }else
        // {
        //     res.status(404).json({
        //        message: 'NO entries foundby normal get' 
        //     })
        // }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
router.post('/',(req,res,next)=>{
    const product=new Product({
         _id: new mongoose.Types.ObjectId(),
         name: req.body.name,
         price: req.body.price
    });
    product.save().then(result=>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json(
        {
            message: 'Handling post requests',
            createdProduct: product
        }
    )
});

router.get('/:productId',(req,res,next)=>
{
    const id=req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log("from database",doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message: 'No valid entry found'})
        }
    })
        .catch(err=> {
            console.log(err);
            res.status(500).json({error: err});
        });
})
router.patch('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    const updateops={};
    for(const ops of req.body){
        updateops[ops.propName]=ops.value;
    }
    product.update({_id: id}, {$set: updateops}).exec().then( results=>{
        console.log(res);
        res.status(200).json(results);
    }).catch(err=>{
        req.status(500).json({
            error: err
        })
    })
});

router.delete('/:productId', (req,res,next)=>{
    const id=req.params.productId;
   product.remove({_id: id})
   .exec()
   .then(result=>{
        res.status(200).json(result);
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error: err
       })
   });

})

module.exports = router;

