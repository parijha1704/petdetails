const  connection=require("./models");

const express=require("express");
const app=express();
const path=require("path");
const expressHandlerbars=require("express-handlebars");
const bodyparser = require("body-parser");

const petsControiller=require('./controllers/petController');

var port=process.env.port||9001;

app.use(bodyparser.urlencoded({
    extended:true
}));

app.set('views',path.join(__dirname,"/views"));

app.engine("hbs",expressHandlerbars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir:__dirname+"/views/layouts"
}));

app.set("view engine","hbs")


app.get('/',function(req,res){
    //res.json({"Name":"Rakesh","Age":"40"});
    res.render("index",{});
});

app.use('/pets',petsControiller);


app.listen(port, function () {
    console.log("Express is running on port http://127.0.0.1:9001/");
   });