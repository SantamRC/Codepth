const express=require('express')
const app=express()
const mongoose=require('mongoose')
const user=require('./model')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const port=4000;

app.use(express.json()
)
mongoose.connect('mongodb+srv://santam:santam12345@cluster-q6ixt.mongodb.net/codepth?retryWrites=true&w=majority', 
    { useNewUrlParser: true,useUnifiedTopology: true}
)

mongoose.connection.once('open',()=>{
    console.log('ATLAS CONNECTED')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.post('/signup',async(req,res)=>{

    const salt= await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(req.body.password,salt)

    const User=new user({
        name: req.body.name,
        password: hashpassword
    })
    try{
        const savedUser=await User.save();
        res.send(User)
    }catch(err){
        res.status(400).send(err)
    }
})

app.post('/login',async(req,res)=>{
   const emailExist=await user.findOne({name:req.body.name})
   if(!emailExist) return res.status(400).send('Email not found')
   const validPass=await bcrypt.compare(req.body.password,user.password,(err,resp)=>{
       if(resp){
           return res.send('logged in')
       }else{
           return res.send('password invalid')
       }
   })
   const token=jwt.sign({_id:user._id},'token')
   res.header('auth-token',token).send(token)
   
})

app.get('/dashboard',verifyToken,(req,res)=>{
    jwt.verify(req.token,'key',(err,authData)=>{
        if(err){
            res.sendStatu(403)
        }else{
            res.send('dashboard accessible')
        }
    })   
})

function verifyToken(req,res,next){
    const token=req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied')
    try{
        const verified=jwt.verify(token,'key')
        req.user=verified
    }catch(err){
        res.status(400).send('invalid')
    }
}

app.listen(port,()=>{
    console.log('SERVER CONNECTED')
})

