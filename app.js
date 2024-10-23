const express=require('express')
const path=require('path')
const app=express()
const url=require('url')
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const userRouter=require('./Routes/user')
const productsRouter=require('./Routes/products')


app.get('/',(req,res)=>{res.send('requst for sever')});
app.use('/user',userRouter)
app.use('/products',productsRouter)
app.use((err,req,res,next)=>
{
res.status(500).json({message:"server error",err:err})

})

app.listen(7000,()=>{
console.log('Running at port7000')
})