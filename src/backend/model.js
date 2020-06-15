const mongoose=require('mongoose');
const schema=mongoose.Schema;

const user=new schema({
    name:String,
    mail:String,
    password:String
})

module.exports=mongoose.model('user',user)
