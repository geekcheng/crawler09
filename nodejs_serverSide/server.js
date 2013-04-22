/**
 * New node file
 */
var http=require("http");
var url=require("url");
var router=require("./router");
function start(){
	function onRequest(request,response){
	    request.setEncoding("utf8");
	var datas="";
	var pathname = url.parse(request.url).pathname;
	
	request.addListener("data",function(postData){
		datas+=postData;
	});
	request.addListener("end",function(){
	console.log(datas);
		router.route(response,datas,pathname);
	});
	

	}
	var server = http.createServer(onRequest).listen(1337);
}

exports.start = start;