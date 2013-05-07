var mysql = require('mysql-native');

module.exports.createConnection = function()     
{
    var db = mysql.createTCPClient(); 
    db.set('auto_prepare', true)
      .set('charset' , 'utf8_general_cs')
      .set('row_as_hash', false)
      .auth('crawldata', 'root', 'qintengfei');
    return db;
}