var mysql = require('mysql-native');

module.exports.createConnection = function()     
{
    var db = mysql.createTCPClient(); 
    db.set('auto_prepare', true)
      .set('charset' , 'utf8_general_ci')
      .set('row_as_hash', false)
      .auth('crawldata', 'root', 'qintengfei');
      db.query("SET character_set_connection=utf8, character_set_results=utf8, character_set_client=binary");
    return db;
}