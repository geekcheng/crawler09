var mongodb = require("mongodb"),
 	mongoserver_crawler = new mongodb.Server("127.0.0.1", 27017, auto_reconnect=true,poolSize=10,{timeou:30,encoding:'utf8'}),
 	mongoserver_seeds = new mongodb.Server("127.0.0.1", 27017, auto_reconnect=true,poolSize=10,{timeou:30,encoding:'utf8'}),
    db_connector_crawler = new mongodb.Db("crawler", mongoserver_crawler,{native_parser:true,safe:false});
    db_connector_seeds = new mongodb.Db("seeds", mongoserver_seeds,{native_parser:true,safe:false});
  
  function saveDoc(docs){
    //存储抓取的内容
    db_connector_crawler.open(function(err,db){
 	db.collection('crawler',{safe:true},function(err,collection){
 			if(!err){
 			console.log("called db_connector_crawler");
     			collection.insert(docs,function(err,result){
				if (err) throw err;
					console.log(result);
 				});
 				}
		});
     console.log("Connection to the database was start!");
    });
  }
//存储抓取的种子
function saveSeeds(seeds){
    db_connector_seeds.open(function(err,db){
 	db.collection('seeds',{safe:true},function(err,collection){
 			if(!err){
 			 	console.log("called db_connector_seeds");
     			collection.insert(seeds,function(err,result){
				if (err) throw err;
					console.log(result);
 				});
 				}
		});
     console.log("Connection to the database was start!");
    });
}

function getSeeds(){


}


exports.saveDoc = saveDoc;
exports.saveSeeds = saveSeeds;
