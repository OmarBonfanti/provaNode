var http = require("http");

var express = require("express");
const { send } = require("process");
var apiS = express();

var hostname = "127.0.0.1";
var port = 3000;

var path = require("path");

var nome = "XD";

/*
var server = http.createServer((req, res) => {
    console.log("req:", req);
    //prepara una res
    res.statusCode = 200;

    res.setHeader("content-Type", "text/plain");
    //chiusura respons
    res.end("Ciao belloccio!");
});
*/

apiS.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/", hostname, port);
});

//creazione risolsa http//localhost:3000/nome 
// get = ricevo nome server
// post = setto nome server
// put  = 
// delete =

// api server con express 

apiS.get("/nome",(req,res)=> {
   console.log("ho ricevuto una get su nome");
  //  res.statusCode = 200;
  //  res.setHeader("content-Type", "text/plain");
    res.end("Check server! il nome è: ",+nome);
});



apiS.get("/",(req,res)=>{
    res.send("sei in home");

} );

apiS.get("/index",(req,res)=>{
    //res.sendFile("C:\\Users\\bonfanti.omar\\Desktop\\provaNode\\index.html");
    res.sendFile(path.join(__dirname+"/index.html"));
});

apiS.get("/change_name",(req,res)=>{
    s
    res.end("Check server! il nome è: ",+nome);
});

var dioporco;
