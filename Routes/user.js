const express=require('express')
const { userLogin, allUsers, singleUser, addUser, updateUser } = require('../controller/userController')
const router=express.Router()


router.get('/',(req,res,next)=>{

    res.send('reached at user router')
})

router.post('/login',userLogin)
router.get('/users',allUsers)
router.get('/users/:id',singleUser)
router.post('/add',addUser)
router.put('/update/:id',updateUser)
router.get('*',(req,res,next)=>{

    res.send('No route available here')
})

 module.exports=router