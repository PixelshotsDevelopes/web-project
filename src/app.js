
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; //process.env.PORT is an enviroment variable which is related to hosting
const path = require("path");
const hbs =require("hbs");

//static path

const staticpath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

//set template engine
app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.use(express.static(staticpath));

//routing
app.get("/",(req, res)=>{
    res.render('index')
})
app.get("/about",(req, res)=>{
    res.render('about')
})
app.get("/weather",(req, res)=>{
    res.render("weather")
})
app.get("*",(req, res)=>{
    res.status(404).render("404error",{
        errorMsg: "oops page not found"
    })
})

app.listen(port,()=>{
    console.log(`listening to port no ${port}`);
})