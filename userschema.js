const mongoose=require('mongoose')
const user =new mongoose.schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    roles:{type:String,default:[]},

})

module.exports =  mongoose.model('user',userSchema)


const profileschema =new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    age:{type:Number},
})
const profile = mongoose.model('profile',mongoose.schema)
const activitySchema =  new mongoose.schema({
    lastlogin:{type:Date}
})
const activity =mongoose.model('activity',activityschema)