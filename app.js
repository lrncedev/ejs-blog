const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs")

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req,res) => {
  let blogItems = [
    {
      blogTitle: "Blog one",
      blogContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eum magni id."  
    },
    {
      blogTitle: "Blog Two",
      blogContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eum magni id."  
    }
    ,
    {
      blogTitle: "Blog Three",
      blogContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eum magni id."  
    }
  ];

  res.render("home", { blogItems, title: "Home"});
})

app.listen(3000, () => {
  console.log("listening at port 3000")
})