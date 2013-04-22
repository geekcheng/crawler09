/**
 * New node file
 */


function saveData(response,datas){
	console.log(datas);
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("data saved."+datas);
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
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

exports.saveData=saveData;
exports.start=start;