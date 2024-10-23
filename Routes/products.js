const express=require('express')
const { getAllProducts, getSingleProducts,updateProduct,addProduct } = require('../controller/productController')
const router=express.Router()

// router.use(express.json)
// router.use(express.urlencoded({extended:true}))


router.get('/',(req,res,next)=>{

    res.send('reached at product Router')
})

router.get('/productlist',getAllProducts)
router.get('/productlist/:id',getSingleProducts)
router.post('/add',addProduct)
router.put('/update/:id',updateProduct)
router.get('*',(req,res,next)=>{

    res.send('No route avilable')
})



 module.exports=router