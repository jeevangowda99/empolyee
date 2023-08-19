const mongoose = require('mongoose');
const mongoURL ="mongodb://127.0.0.1:27017/company1"; 

const connectToMongo = async() =>{
    try{
        await mongoose.connect(mongoURL)
        console.log(" To this  mongo is connected");
    }
    catch(error){
        console.log("to this is not connected",+error);
    }
}
module.exports=connectToMongo;
