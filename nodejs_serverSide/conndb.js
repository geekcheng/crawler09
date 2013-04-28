/**
 * New node file
 */
 var mongodb = require("mongodb"),
 	 mongoserver = new mongodb.Server("127.0.0.1", 27017, auto_reconnect=true,poolSize=10,{timeou:30,encoding:'utf8'}),
    db_connector = new mongodb.Db("test", mongoserver,{native_parser:true,safe:false});
    db_connector.open(function(err,db){
 	db.collection('test',{safe:true},function(err,collection){
 			if(!err){
     			collection.find({'name':'tompig'},function(err,result){
				if (err) throw err;
					console.log(result);
 				});
 				}
		});
     console.log("Connection to the database was start!");
    });
