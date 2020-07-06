const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");

let items=["Buy Food" , "Cook Food"];
let workItems = [];



app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine" , "ejs");
app.use(express.static("public"));




app.get("/" , function(req , res){
    
    let today = new Date();
    let options = {
        day : "numeric",
        month : "long",
        year : "numeric"
    }
    
    let day = today.toLocaleDateString("en-US" , options);
    
    res.render("list" , {listTitle : day , liItems : items , path : "/"}); 
    
});

app.post("/" , function(req , res){
    

    let item =  req.body.newItem;
    items.push(item);
  res.redirect("/");
});


app.get("/work" , function(req , res){
    res.render("list" , {listTitle : "Work Items" , liItems : workItems , path : "/work"});
});

app.post("/work" , function(req , res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})



app.listen(3000 , function(){
    console.log("Server is running on port 3000");
}); 
