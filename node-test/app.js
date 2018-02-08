var express = require("express");
var bodyParser = require("body-parser");
var app     = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var path    = require("path");

function myFunc(arg) {
  console.log(`arg was => ${arg}`);

}

setInterval(myFunc, 6000, 'funky 3');

function happyDays(arg) {
  console.log(`arg was => ${arg}`);

}
setInterval(happyDays, 36006000, 'funky');


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});


app.post('/api/data' ,function(req,res){
  const data = req.body;
  //call sotdjjd
  ///sakjfdsa
  if(data.id) {
    res.json({ok: true});
  } else{
    res.json({ok: false});
  
  }
  
});

app.get('/api/data',function(req,res){
  res.json({name:'22',id:1, gender:true});
});


app.listen(3000);

console.log("Running at Port 3000");
