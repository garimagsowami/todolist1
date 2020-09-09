const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname+"/date.js");
console.log(date);
const app = express();

var items = [];
var works =[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/" ,function(req, res){

  let day = date.getDay();

  res.render("list", {WorkList: day, newListItem: items});

});


app.post("/", function(req, res){
  const item = req.body.newitem;

 if(req.body.list === "work"){
   works.push(item);
   res.redirect("/work");

 }else{
   items.push(item);
   res.redirect("/");

 }
});

app.get("/work", function(req,res){

  res.render("list",{WorkList:"work", newListItem: works})
});


app.get("/about", function(req, res){
  res.render("about");
})


app.listen(3000, function(){
  console.log("server is listening at 3000");
});
