const express = require("express");
const app = express();
const port = 8080;

app.set("view engine","ejs");
const path = require("path");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.render("hero.ejs");
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});