var requestHandlers =require("./requestHandlers");
var mongodb = require("mongodb"),
 	mongoserver_crawler = new mongodb.Server("127.0.0.1", 27017, auto_reconnect=true,poolSize=10,{timeou:30,encoding:'utf8'}),
 	mongoserver_seeds = new mongodb.Server("127.0.0.1", 27017, auto_reconnect=true,poolSize=10,{timeou:30,encoding:'utf8'}),
 	mongoserver_returnSeeds = new mongodb.Server("127.0.0.1", 27017, auto_reconnect=true,poolSize=10,{timeou:30,encoding:'utf8'}),
    db_connector_crawler = new mongodb.Db("crawler", mongoserver_crawler,{native_parser:true,safe:false});
    db_connector_seeds = new mongodb.Db("seeds", mongoserver_seeds,{native_parser:true,safe:false});
    db_connector_returnSeeds = new mongodb.Db("seeds", mongoserver_returnSeeds,{native_parser:true,safe:false});
    //db_connector_seeds = new mongodb.Db("seeds", mongoserver_seeds,{native_parser:true,safe:false});
  //上边可以优化，创建一个函数，参数为db，return server和connector.
  function saveDoc(docs){
    //存储抓取的内容
    db_connector_crawler.open(function(err,db){
 	db.collection('crawler',{safe:true},function(err,collection){
 			if(!err){
 			console.log("called db_connector_crawler");
     			collection.insert(docs,function(err,result){
				if (err) throw err;
					console.log(result);
					db.close();
 				});
 				}
		});
     console.log("saveDoc was start!");
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
										db.close();
 				});
 				}
		});
     console.log("saveSeeds was start!");
     db.close();
    });
}

function getSeeds(response){
	var dd;
	db_connector_returnSeeds.open(function(err,db){
	 	db.collection('seeds',{safe:true},function(err,collection){
		var streams=collection.find().stream();
			 streams.on("data",function(item){
			 	dd=item;
			 });
			 streams.on("end",function(){
			 console.log("end");
			 db.close();
		 	 });
		});
	});
	//此处用setTimeout代替先，可以使用promise.js模式进行优化
	setTimeout(function(){requestHandlers.returnSeeds(response,dd);},3000);
};

exports.saveDoc = saveDoc;
exports.saveSeeds = saveSeeds;
exports.getSeeds = getSeeds;
