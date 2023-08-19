const { json } = require('express');
const employeeSchema = require('../model/employeeSchema');
//const MySchema = require('../model/employeeSchema')
const Insert = async(req,res)=>{


    try{


        const {name, email, phone_no, address,designation, salary} = req.body;

        let checkdesignation = await employeeSchema.findOne({designation});
        if(checkdesignation){
            console.log("desihnation is alredy use! try another post");
            return res.status(400).json({error:"designation is alredy use"});
        
        }
        else{
        const data = new employeeSchema({name, email, phone_no, address,designation, salary});
        const savedData = await data.save();
        console.log("Insertion successfully")
        res.send({"Insertion success":true,savedData})
        }

    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!!")
    }

}
const View = async(req,res)=>{
    try{
        const data = await employeeSchema.findById(req.params.id);
        if(!data){
            console.log = ( "data not found with this ID");
            return res.status(404).send("data dose not exists with this ID!")
        }
        else{
        console.log(data)
        res.json(data)
    }
}
    catch(error){
        console.error("some error occureed"+error);
        res.status(500).json("some intrnal error!!!")
    }
}
const Delete = async(req,res)=>{
    try{
        let data = await employeeSchema.findById(req.params.id)
        if(!data){
        console.log("data not found with this ID");
        return res.status(404).send("Data does not exists with  this ID");
        }
        else{
            data = await employeeSchema.findByIdAndDelete(req.params.id);
            // console.log("Data delete sucessfully....");
            res.json({"success":true,"Deleted Data":data})
        }

    }
    catch(error){
        console.error("some error occureed"+error);
        res.status(500).json("some intrnal error!!!")
    }
}
const Update = async (req,res)=>{
    const { name, email, phone, address,designation, salary} = req.body
    try{
        const newData={}
        if(name){newData.name=name}
        if(email){newData.email=email}
        if(phone){newData.phone=phone}
        if(address){newData.address=address}
        if(designation){newData.designation=designation}
        if(salary){newData.salary=salary}
        let data = await employeeSchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this Id");
            
            return res.status(404).send("data does not exists with this ID!")
        }
        else{
            data = await employeeSchema.findByIdAndUpdate(req.params.id,{$set:newData});
            console.log("Update data : " + data)
            res.json({data});
        }

    }
    catch(error){
        console.error("some error occureed"+error)
    res.status(500).json("some intrnal erroe!!!")

    }
}
module.exports ={Insert,View,Delete,Update};