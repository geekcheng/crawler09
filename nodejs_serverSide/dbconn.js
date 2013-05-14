var mysql = require('mysql-native');
//function 定义一个匿名函数，createConnection指向这个匿名函数，使用module.exports导出这个函数为一个模块
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
