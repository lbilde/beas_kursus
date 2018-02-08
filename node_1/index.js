var express = require('express')
var bodyParser = require('body-parser')
var db = require('./fakedb')
var smsSender = require('./sms-sender')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => 
    res.json(db.getSmsStored()))

app.get('/addmore', (req, res) =>  {
    db.addManySms();
    res.json(db.getSmsStored());
})

app.get('/send', (req, res) => {
  if(db.getSmsStored().length == 0){
    res.json(smsSender.getAllSend());
  } else{
    db.getSmsStored().forEach(sms => {
      console.log('sending sms with id ' + sms.id  + '...');
      smsSender.add(sms, () => {
        console.log('sms with id: ' + sms.id + ' is send' );
        db.remove(sms.id);
        if(db.getSmsStored().length == 0){
          res.json(smsSender.getAllSend());
        }
      });
    });
  }
  
})

app.post('/', (req, res) => {
    if(req.body.text && 
       req.body.afsender && 
       req.body.modtager){
      
      db.add(req.body.modtager, 
             req.body.afsender, 
             req.body.text);

      res.send(db.getSmsStored());
    } else{
      res.status(500)
         .send('Something broke!') 
    }
    
  }
  
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))