var conndb = require("./conndb.js");
var bufferhelper=require("./bufferhelper.js");
function saveData(response,datas){
	//分割字符串，组装成json
	var s= datas.split("&");

	var url=decodeURIComponent(s[0].toString().split("=")[1]);
	var data=decodeURIComponent(s[1].toString().split("=")[1]);
	//下面的url,data,hrefs应该用循环来取，可是s[2]有问题，有待优化
	var hrefs=decodeURIComponent(s[2].toString().split("=")[1]);
	var docs={"url":url,"c_page":decodeURIComponent(data)}
	var seeds={"hrefs":hrefs};
	
	conndb.saveDoc(docs);
	conndb.saveSeeds(seeds);
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

function returnSeeds(response){
	var seeds=conndb.getSeeds();
	response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    response.write(seeds);
    response.end();
}

exports.saveData=saveData;
exports.start=start;
exports.returnSeeds=returnSeeds;
