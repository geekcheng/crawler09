var db = require("./mysqldb.js");
function save(response,datas){
	console.log("data is "+datas);
	
 	var seeds=decodeURIComponent(decodeURIComponent((datas.split("&")[2]).toString().split("=")[1].toString()));
 	var url=decodeURIComponent(decodeURIComponent((datas.split("&")[0]).toString().split("=")[1].toString()));
 	var data=decodeURIComponent(decodeURIComponent((datas.split("&")[1]).toString().split("=")[1].toString()));
 	var title=decodeURIComponent(decodeURIComponent((datas.split("&")[3]).toString().split("=")[1].toString()));
	

	db.save(url,data,title);
	db.saveSeeds(seeds);
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("data saved.");
	response.end();
}
function start(response){
console.log("start is active.");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/ajax" method="post">'+
    '<input type="text" name="ajaxs">'+
    '<input type="submit" value="提交" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    response.write(body);
    response.end();
}
exports.save = save;