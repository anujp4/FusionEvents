const express = require("express");

const bodyParser  = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/",function(req,res)
{
  console.log("home");

  res.render("index");
});

app.get("/about.ejs",function(req,res)
{
  console.log("about");

  res.render("about");
});
app.get("/services.ejs",function(req,res)
{
  console.log("services");

  res.render("services");
});
app.get("/portFolio.ejs",function(req,res)
{
  console.log("portfolio");

  res.render("portFolio");
});
app.get("/contact.ejs",function(req,res)
{
  console.log("contact");
  
  res.render("contact");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});


