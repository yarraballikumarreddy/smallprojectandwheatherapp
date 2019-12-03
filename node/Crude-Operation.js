const pg = require('pg');//npm install pg-------
const url='postgres://postgres:Admine@123@localhost:5432/postgres';
const client =  new pg.Client(url);
const jwt = require('jsonwebtoken');
client.connect(function(err){
if(err){
return console.error('Plaese Give Me Valied Url');
}
});
//=============================== INSERT-OPERATION==========================================//
 function InseartData (req,res){
    var user ={
     id:req.body.id,
     name:req.body.name,
     roolnumber:req.body.roolnumber
    }
    console.log(user);
let InseartQuarry=`INSERT INTO "DEMO".student(id,name,roolnumber) VALUES (${user.id},'${user.name}',${user.roolnumber})`;
               //1....**IN Promise Formate**/
 client.query(InseartQuarry)
.then(result =>res.send(user))
.catch(err =>console.error('Please Enter A Valid Query'+err))
                //2...+++IN Call Back Format+++/
// client.query(InseartQuarry,function(err,result){
// if(err){
//     return console.error('Please Enter A Valid Query'+err);
// }
// else{

//     res.send(user);
// }
// });
                //+++++++++++++++++++++++++//
}
//================================= DELETE-OPERATION=======================================//
function deleate (req,res){
    id=req.body.id;
    let deleateQuary = `DELETE from "DEMO".student where id = ${id}`;
           //**IN Promise Formate**/
     client.query(deleateQuary)
     .then(result =>res.send(result.rows))
     .catch(err =>console.error(err))
           //+++IN Call Back Formate+++//
    // client.query(deleateQuary,function(err,result){
    //     if(err){

    //         return console.error("Error in Deleate Quary"+err)
    //     }
    //     else{

    //         res.send("SucseeFully Deleated"+result.rows)
    //     }
    // });
           //+++++++++++++++++++++++++//    
}
//================================= UPDATE-OPERATION=======================================//
function Update (req,res){
    var user ={
        id:req.body.id,
        name:req.body.name,
        roolnumber:req.body.roolnumber
       }
let UpdateQuary=`UPDATE "DEMO".student set name='${user.name}',roolnumber=${user.roolnumber} where id=${user.id}`;
                  //**IN Promise Formate**/
client.query(UpdateQuary)
.then(result =>res.send(user))
.catch(err =>console.error("Plese Give Me A Valied Update Quary"+err))
              //+++IN Call Back Formate+++//
// client.query(UpdateQuary,function(err,result){

// if(err){
//    return console.error("Plese Give Me A Valied Update Quary"+err)
// }
// else{
//     res.send("Sucsees Fully Updated"+result.rows)
// }
// });
             //+++++++++++++++++++++++++// 
}
//==============================RETRIVE-OPERATION=================================//
function Retrive(req,res){
                //**IN Promise Formate**/
let RetriveQuary = `SELECT * from "DEMO".student`;
client
  .query(RetriveQuary)
  .then(result => res.send(result.rows))
  .catch(err => console.error('Please Enter A Valied Queary'+err))
               //+++IN Call Back Formate+++//
// client.query(RetriveQuary,function(err,result){
// if(err){
// return console.error("Please Give A Valide RetriveQuary");
// }
// else{
//     return res.send(result.rows);
// }
// });
            //+++++++++++++++++++++++++//
}
//===========================SINGLE-ID=========================================//
function singleid(req,res){
    id=req.body.id;
let SigleIdQurey = `SELECT * from "DEMO".student where id=${id}`
client.query( SigleIdQurey)
.then(result =>res.send(result.rows))
.catch(err=>console.error("PLease Provide a Valie SingleId URL"+err))
}
//=====================2.....ADD-EMPLOYE Rest-Api-Autharization===============//

function ADDEMPLOYE (req,res){
    var user ={
        id:req.body.id,
        name:req.body.name,
        roolnumber:req.body.roolnumber
       }
       let EMPQuarry=`INSERT INTO "DEMO".employe(id,name,roolnumber) VALUES (${user.id},'${user.name}',${user.roolnumber})`;
       //1....**IN Promise Formate**/
client.query(EMPQuarry)
.then(result =>res.send(user))
.catch(err =>console.error('Please Enter A Valid Query'+err))
                //2...+++IN Call Back Format+++/
// client.query(InseartQuarry,function(err,result){
// if(err){
//     return console.error('Please Enter A Valid Query'+err);
// }
// else{

//     res.send(user);
// }
// });
    }
                //+++++++++++++++++++++++++//
                //======================== LOGIN-PAGE===============================//
function LOGINPAGE (req, res) {
    var info = {
      email: req.body.email,
      password: req.body.password
    }
    let SigleIdQurey = `SELECT * from "DEMO".signup where email='${info.email}' and password='${info.password}'`
    console.log(SigleIdQurey);
    client.query(SigleIdQurey)
      .then(result => {
          console.log(result.rows)
        if (result.rows.length>0) 
        {
          jwt.sign({ data: result.rows.email}, "umakey", (err, token) => {
            res.send({ "token": token })
          });
        }
        else {
          res.send({token:"INVALIDE AUTHORIZATION"})
        }
      })
      .catch(err => console.error("PLease Provide a Valie SingleId-LOGIN URL" + err))
  
  }
                      //+++++++++++++++++++++++++//

function SignupPage (req,res){
    var user ={
        id:req.body.id,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
       }
       
       let SignupQuary =`INSERT INTO "DEMO".signup(id,email,username,password) VALUES (${user.id},'${user.email}','${user.username}','${user.password}')`;
       client.query(SignupQuary)
       .then(result =>res.send(user))
       .catch(err =>console.error('Please Enter A Valid Query'+err))
    }

module.exports={add:InseartData,dlt:deleate,UPD:Update,ret:Retrive,SinID:singleid,EMP:ADDEMPLOYE,Signup:SignupPage,LOG:LOGINPAGE};