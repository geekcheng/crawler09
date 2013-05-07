var mysql = require("./dbconn");

function save(href,data,sub_url) {
    var db = mysql.createConnection();
    var time=Date.
   var sql = 'INSERT INTO contents SET id=null,href='+db.quote(href)+',data='+db.quote(data)+',sub_url='+db.quote(sub_url)+',crawltime='+db.quote();
    db.query(sql).on('result', function(r) {
      console.log("has been saved!!");
    })
    
  }
  
  exports.save = save;