var mysql = require("./dbconn");

function save(href,data,title,domain) {
    var db = mysql.createConnection();
   	var time=new Date();
    var year =time.getFullYear();
    var date = time.getMonth()+1;
    var day=time.getDay();
    var realtime=year+"-"+date+"-"+day;
   var sql = 'INSERT INTO contents SET id=null,href='+db.quote(href)+',data='+db.quote(data)+',title='+db.quote(title)+',crawltime='+db.quote(realtime)+',domain='+db.quote(domain);
    db.query(sql).on('result', function(r) {
      console.log("has been saved!!");
    })
  }
  
  function saveSeeds(sub_url,domain,url) {
    var db = mysql.createConnection();
    var list = sub_url.split(",");
    for(var index in list){
	    var sql='INSERT INTO seedsdata SET parent='+db.quote(url)+',domain='+db.quote(domain)+',seeds='+db.quote(list[index]);
	        db.query(sql).on('result', function(r) {
     		 console.log("seeds has been saved!!");
    })
    }
  }
  
  function seeds(foo){
    var db = mysql.createConnection();
	    var sql="select seeds from seedsdata where flag='0' and realstatus='0' limit 10 ";
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

function da(bookname,author,translator,press,press_time,price,score,tag,img_url,url) {
    var db = mysql.createConnection();
    for(var i=0;i<19;i++){
    var sql = 'INSERT INTO spedata SET id=null,bookname='+db.quote(bookname[i])+',author='+db.quote(author[i])+
    ',translator='+db.quote(translator[i])+',press='+db.quote(press[i])+',press_time='+
    db.quote(press_time[i])+',price='+db.quote(price[i])+',score='+db.quote(score[i])+',tag='+
    db.quote(tag)+',img_url='+db.quote(img_url[i])+',url='+db.quote(url);
    db.query(sql).on('result', function(r) {
      console.log("has been saved!!");
    })
    }
  }
  
  
  function seda(foo){
    var db = mysql.createConnection();
	    var sql="select seeds from seedsdata where flag='0' and realstatus='0' and souce='d' limit 10 ";
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
  exports.da=da;
  exports.seda=seda;
  