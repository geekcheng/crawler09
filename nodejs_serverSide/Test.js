var mysql = require("./dbconn");

    var db = mysql.createConnection();
	    var sql="select seeds from seedsdata where flag='0'  limit 10 ";
	    var sql2="update seedsdata set flag='1' where flag='0' limit 10";
    	db.query(sql).addListener('row', function(rs) {
    
    	console.log(rs);
    
   		 }).addListener('end', function(rr) {
   		 	db.query(sql2).on('result', function(r) {
     		 	console.log("del has been del!!");
    		})
     		 db.close();
    	});
    	
    	
    
