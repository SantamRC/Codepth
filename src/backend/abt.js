const mongoose=require('mongoose');
const schema=mongoose.Schema;

const About=new schema({
    email:String,
    about:String
})

module.exports=mongoose.model('About',About)
