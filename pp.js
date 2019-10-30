const express=require('express');
const app=express();






app.listen(3000,function () {
    console.log('The server is listening');
});

app.get('/style.css',function (req,res)
{
    res.sendFile(__dirname+'/style.css');
});

app.get('/login',function (req,res)
{
    res.sendFile(__dirname+'/login.html');
});

app.get('/reg1.html',function (req,res)
{
    res.sendFile(__dirname+'/register.html');
});

app.get('/login121.jpg',function (req,res)
{
    res.sendFile(__dirname+'/images/login121.jpeg');
});

app.get('/info',function (req,res)
{
    var email=req.query.gmail;
    var password=req.query.gpassword;

    console.log(email);
    console.log(password);
    res.send('fine');
    console.log("ese6e");
});