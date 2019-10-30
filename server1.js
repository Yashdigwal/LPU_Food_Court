var express = require('express');  
var app = express(); 

var bodyp=require('body-parser');


// database

 var mysql = require('mysql');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: ""  
});  

con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  

  con.query("use menu1", function (err, result) {  
    if (err) throw err;  
    console.log("Database created");  
});  
});  


//end database
app.post('/database.html',function(req,res)
{
	res.sendFile(__dirname+'/database.html')
})



//reg page

app.get('/reg1.html', function (req, res) {  
  res.sendFile(__dirname+"/reg1.html");  
});  

//css
app.get('/style1.css',function(req,res)

{
  res.sendFile(__dirname+"/style1.css");
}) 


app.get('/success',function(req,res)

{
  res.sendFile(__dirname+"/home2.html");
}) 


app.post('/success',function(req,res)

{
  res.sendFile(__dirname+"/home2.html");
})

app.get('/jsp.html',function(req,res)

{
  res.sendFile(__dirname+"/jsp.html");
}) 
app.get('/image/g.jpg',function(req,res)

{
  res.sendFile(__dirname+"/image/g.jpg");
}) 
//end css
//image part
app.get('/image/login121.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/login121.jpg')
})
//end image page
//end reg page

//login page  
app.get('/login.html', function (req, res) {  
  res.sendFile(__dirname+"/login.html");  
});  

//css
app.get('/style.css',function(req,res)

{
  res.sendFile(__dirname+"/style.css");
}) 
//end css
//image part
app.get('/image/login121.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/login121.jpg')
})
//end image page
//end login page

//for home page
app.get('/',function(req,res)
{
  res.sendFile(__dirname+'/home.html')
})
app.get('/home.html',function(req,res)
{
  res.sendFile(__dirname+'/home.html')
})
app.get('/about',function(req,res)
{
  res.sendFile(__dirname+'/home.html')
})

//images homepage
app.get('/image/background2.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/background2.jpg')
})
app.get('/image/pizza.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/pizza.jpg')
})
app.get('/image/in.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/in.jpg')
})
app.get('/image/pun.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/pun.jpg')
})
app.get('/image/si.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/si.jpg')
})
app.get('/image/ch.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/ch.jpg')
})
app.get('/image/js.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/js.jpg')
})
app.get('/image/whatsap.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/whatsap.jpg')
})
app.get('/image/youtube.png',function(req,res)
{
  res.sendFile(__dirname+'/image/youtube.png')
})
app.get('/image/google.png',function(req,res)
{
  res.sendFile(__dirname+'/image/google.png')
})
app.get('/image/facebook.png',function(req,res)
{
  res.sendFile(__dirname+'/image/facebook.png')
})

//end image
//css homepage
app.get('/style2.css',function(req,res)

{
	res.sendFile(__dirname+"/style2.css");
})
//end css hamepage
//end home page



//service page
app.get('/home2.html',function(req,res)
{
  res.sendFile(__dirname+'/home2.html')
})
app.get('/about',function(req,res)
{
  res.sendFile(__dirname+'/home2.html')
})

//image service page
app.get('/image/shop1.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop1.jpg')
})
app.get('/image/shop2.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop2.jpg')
})
app.get('/image/shop3.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop3.jpg')
})
app.get('/image/shop4.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop4.jpg')
})
app.get('/image/shop5.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop5.jpg')
})
app.get('/image/shop6.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop6.jpg')
})
app.get('/image/shop7.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop7.jpg')
})
app.get('/image/shop8.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop8.jpg')
})
app.get('/image/shop9.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop9.jpg')
})
app.get('/image/shop10.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop10.jpg')
})
app.get('/image/shop11.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop11.jpg')
})
app.get('/image/shop12.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop12.jpg')
})
app.get('/image/shop13.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop13.jpg')
})
app.get('/image/shop14.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop14.jpg')
})
app.get('/image/shop15.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop15.jpg')
})
app.get('/image/shop16.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop16.jpg')
})
app.get('/image/shop17.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop17.jpg')
})
app.get('/image/shop18.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop18.jpg')
})
app.get('/image/shop19.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop19.jpg')
})
app.get('/image/shop20.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop20.jpg')
})
app.get('/image/shop21.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop21.jpg')
})
app.get('/image/shop22.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop22.jpg')
})
app.get('/image/shop23.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop23.jpg')
})
app.get('/image/shop24.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop24.jpg')
})
app.get('/image/shop25.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop25.jpg')
})
app.get('/image/shop26.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop26.jpg')
})
app.get('/image/shop27.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop27.jpg')
})
app.get('/image/shop28.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop28.jpg')
})
app.get('/image/shop29.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop29.jpg')
})
app.get('/image/shop30.jpg',function(req,res)
{
  res.sendFile(__dirname+'/image/shop30.jpg')
})
//end image part
//wow slider work

app.get('/data1/images/slid4.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/images/slid4.jpg')
})
app.get('/data1/images/slider5.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/images/slider5.jpg')
})
app.get('/data1/images/slid6.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/images/slid6.jpg')
})
app.get('/data1/images/slid10.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/images/slid10.jpg')
})
app.get('/data1/images/slid15.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/images/slid15.jpg')
})
app.get('/data1/images/slid8.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/images/slid8.jpg')
})
app.get('/data1/images/slid12.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/images/slid12.jpg')
})
app.get('/data1/images/slid13.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/images/slid13.jpg')
})

//second part
app.get('/data1/tooltips/slid4.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/tooltips/slid4.jpg')
})
app.get('/data1/tooltips/slider5.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/tooltips/slider5.jpg')
})
app.get('/data1/tooltips/slid6.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/tooltips/slid6.jpg')
})
app.get('/data1/tooltips/slid10.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/tooltips/slid10.jpg')
})
app.get('/data1/tooltips/slid15.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/tooltips/slid15.jpg')
})
app.get('/data1/tooltips/slid8.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/tooltips/slid8.jpg')
})
app.get('/data1/tooltips/slid12.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/tooltips/slid12.jpg')
})
app.get('/data1/tooltips/slid13.jpg',function(req,res)
{
  res.sendFile(__dirname+'/data1/tooltips/slid13.jpg')
})

// end second part

app.get('/engine1/arrows.png',function(req,res)

{
  res.sendFile(__dirname+"/engine1/arrows.png");
})
app.get('/engine1/bg.png',function(req,res)

{
  res.sendFile(__dirname+"/engine1/bg.png");
})
app.get('/engine1/bullet.png',function(req,res)

{
  res.sendFile(__dirname+"/engine1/bullet.png");
})
app.get('/engine1/triangle.png',function(req,res)

{
  res.sendFile(__dirname+"/engine1/triangle.png");
})


app.get('/engine1/style.css',function(req,res)

{
  res.sendFile(__dirname+"/engine1/style.css");
})
app.get('/engine1/jquery.js',function(req,res)

{
  res.sendFile(__dirname+"/engine1/jquery.js");
})
app.get('/engine1/script.js',function(req,res)

{
  res.sendFile(__dirname+"/engine1/script.js");
})

//end wow slider
//css service page
app.get('/style4.css',function(req,res)

{
  res.sendFile(__dirname+"/style4.css");
})
//end css service page

//end service page







var server = app.listen(8000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
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
    res.sendFile(__dirname+'/reg1.html');
});

app.get('/login121.jpg',function (req,res)
{
    res.sendFile(__dirname+'/image/login121.jpeg');
});

app.get('/south.html',function (req,res)
{
    res.sendFile(__dirname+'/south.html');
});
app.get('/database.html',function (req,res)
{
    res.sendFile(__dirname+'/database.html');
});
app.get('/chin.html',function (req,res)
{
    res.sendFile(__dirname+'/chin.html');
});


app.get('/info',function (req,res)
{
    var email=req.query.gmail;
    var password=req.query.gpassword;

    var q1='use customer';
    var q2='select "'+email+'" from info where password="'+password+'"';
  
   console.log(email);
   console.log(password);
   console.log(q2);

  con.query(q1, function (err, result) {  
    if (err) throw err;  
    console.log("Database selected");
});  

  con.query(q2, function (err, result) {  
    if (err) throw err;  
    console.log(result);
    if(result.length!=0)
    {
      res.send("YES");
      console.log("sent");
    }
    else
    {
      res.send("NO");
      console.log("NO SENT");
    }

});  

}); 


app.get('/signdata',function (req,res)
{
    var name=req.query.name;
    var mail=req.query.gmail;
    var password=req.query.password;
    var shop=req.query.shop;
    

    var q1='use customer';
    var q2='insert into info values("'+mail+'" , "'+password+'")';
  

  con.query(q1, function (err, result) {  
    if (err) throw err;  
    console.log("Database selected");
}); 

   con.query(q2, function (err, result) {  
    if (err) throw err;  
    console.log(result);
    

    res.send("YES");

}); 

}); 
