
// var userDetails={
//     'id':4,
//     'name':'Rajshaker',
//     'roolnumber':102
//     };
// CrudeOperation.add(userDetails);
// CrudeOperation.dlt(2);
// var user={
//     'id':4,
//     'name':'Alla.SivaReddy',
//     'roolnumber':101
//     };
// CrudeOperation.UPD(user);
// CrudeOperation.ret();

const express= require('express');//npm install express
var app = express();
var cors=require('cors');
const jwt = require('jsonwebtoken');
const expressJwt= require('express-jwt');
app.use(expressJwt({secret:"umakey"}).unless({
    path:[
      '/LOG'
    ]
  }));
app.use(cors());
const bodyParser= require('body-parser');//npm install body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const CrudeOperation= require('./Crude-Operation');
app.get("/RetriveingData",CrudeOperation.ret);
app.post("/InseartData",CrudeOperation.add);
app.post('/DeleteData',CrudeOperation.dlt);
app.put("/UpDateData",CrudeOperation.UPD);
app.put("/SingleId",CrudeOperation.SinID);
app.post("/ADDEMPLOYIES",CrudeOperation.EMP);
app.post('/SignupPage',CrudeOperation.Signup)
app.post("/LOG", CrudeOperation.LOG);
app.listen(8081, function () {

    console.log("Example app listening at http://localhost:8081")
 });