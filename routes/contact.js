const express=require('express');

const path=require('path')
const router=express.Router();

router.get('/contact-us' , (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../' , 'views' , 'contactus.html'))
})

module.exports=router;