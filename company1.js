const mongoose =require('mongoose')
const {Schema} = mongoose;
const MySchema = new Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone_no:{
        type:Number,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now

    },
    designation:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
})
module.exports=mongoose.model("employee2",MySchema)