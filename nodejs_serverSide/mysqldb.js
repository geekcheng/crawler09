var mysql = require("./dbconn");

function save(href,data,sub_url) {
    var db = mysql.createConnection();
   	var time=new Date();
    var year =time.getFullYear();
    var date = time.getMonth()+1;
    var day=time.getDay();
    var realtime=year+"-"+date+"-"+day;
   var sql = 'INSERT INTO contents SET id=null,href='+db.quote(href)+',data='+db.quote(data)+',sub_url='+db.quote(sub_url)+',crawltime='+db.quote(realtime);
    db.query(sql).on('result', function(r) {
      console.log("has been saved!!");
    })
  }
  
  function saveSeeds(sub_url) {
    var db = mysql.createConnection();
    var list = sub_url.split(",");
    for(var index in list){
	    var sql='INSERT INTO seedsdata SET seeds='+db.quote(list[index]);
	        db.query(sql).on('result', function(r) {
     		 console.log("seeds has been saved!!");
    })
    }
  }
  
  function seeds(foo){
    var db = mysql.createConnection();
	    var sql="select seeds from seedsdata where flag='0'  limit 10 ";
	    var sql2="update seedsdata set flag='1' where flag='0' limit 10";
    	db.query(sql).addListener('row', function(rs) {
    	console.log("in mysqldb rs="+rs);
    		foo(rs);	
   		 }).addListener('end', function(rr) {
   		 	db.query(sql2).on('result', function(r) {
     		 	console.log("has been update!!");
    		});
     		 db.close();
    	});
    };

  	
  
  exports.save = save;
  exports.saveSeeds =saveSeeds;
  exports.seeds=seeds;