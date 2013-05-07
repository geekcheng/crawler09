function startAll(){ var server = require("./server");
 server.start();
 console.log("server start.");
 }
 
 exports.startAll=startAll;