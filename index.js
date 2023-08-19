const express =require('express');
const connectToMongo =require("./database")
const MySchema =require("./company1")
const app = express();

app.use(express.json());
app.use('/api/employee',require('./router/employeeRouter'))






app.post('/api/insert',async(req,res)=>{
    try{
        const {name, email, phone_no, address, salary} = req.body;
        const data = new MySchema({name, email, phone_no, address, salary});
        const savedData = await data.save();
        console.log("Insertion successfully")
        res.send({"Insertion success":true,savedData})

    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!!")
    }

})





 port=7000;



 connectToMongo()


  app.listen(port,()=>{
   console.log("this isssss success"+port); 
 })


