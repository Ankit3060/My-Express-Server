const express = require('express');
const app = express();

app.get("/",function(req,res)
{
    // console.log(request);
    res.send("<h1>Hello World!!</h1>");
});

app.get("/contact",function(req,res)
{
    res.send("contact me at : ankit330660@gmail.com");
})

app.get("/about",function(req,res)
{
    res.send("I am Ankit kumar I love coding");
})

app.get("/hobbies",function(req,res)
{
    res.send("<ul><li>Cricket</li><li>Football</li></ul>");
})

app.get("/Sports",function(req,res)
{
    res.send("<ul><li>Cricket</li><li>Football</li></ul>");
})

app.listen(3000,function()
{
    console.log("Server started at port 3000")
});
