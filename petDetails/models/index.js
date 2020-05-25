const mongoose=require("mongoose");

const pet=require('./pets');

mongoose.connect("mongodb://127.0.0.1:27017/petsDb",{ useNewUrlParser: true },(error)=>{
    if(!error)
    {
        console.log("Db Connected successfully")
    }
    else
    console.log("Error in Database connection is :",error);
});