const express=require("express");
const mongoose=require("mongoose");

const router = express.Router();
const petsModel=mongoose.model('Pets',petSchema);

/*
router.get("/",(req,res)=>{
  res.send("Pets controller");
});*/

router.get("/lists",(req,res)=>{
    var pets=new petsModel();
   // pets.name="Sheru";
    //pets.colour="White";
    //pets.age=11;
    //pets.save();


    petsModel.find((err,docs)=>{
        if(!err)
        {
            console.log(docs);
            console.log("Rendering on list.hbs");
           
            res.render("list",{ data : docs})
           // console.log(data);
           // res.json(docs);
            
        }
        else 
        {
            res.send("Errorv:",err);
        }

    });
    
  });
  router.post("/StorePets",(req,res)=>{
     var pets=new petsModel();
     pets.name=req.body.name;
     pets.colour=req.body.colour;
     pets.age=req.body.age;

     console.log("request is :"+req+"Pet Name is :"+pets.name);
     pets.save((err,doc)=>{
         if(err)
         {
             console.log("Record not saved",err);
             res.send("error message :",err);
         }
         else
         {
            console.log("Record  saved",doc);
            res.json(doc); 
         }
     });
     
  });


module.exports=router;