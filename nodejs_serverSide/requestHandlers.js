var db = require("./mysqldb.js");
function save(response,datas){
	console.log("data is "+datas);
	
 	var seeds=decodeURIComponent(decodeURIComponent((datas.split("&")[2]).toString().split("=")[1].toString()));
 	var url=decodeURIComponent(decodeURIComponent((datas.split("&")[0]).toString().split("=")[1].toString()));
 	var data=decodeURIComponent(decodeURIComponent((datas.split("&")[1]).toString().split("=")[1].toString()));
 	var title=decodeURIComponent(decodeURIComponent((datas.split("&")[3]).toString().split("=")[1].toString()));
 	var domain =decodeURIComponent(decodeURIComponent((datas.split("&")[4]).toString().split("=")[1].toString()));
	

	db.save(url,data,title,domain);
	db.saveSeeds(seeds,domain,url);
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("data saved.");
	response.end();
}
function da(response,datas){
	//console.log("in da--:"+decodeURIComponent(decodeURIComponent(datas)));
	
		var booknames=decodeURIComponent(decodeURIComponent((datas.split("&")[0]).toString().split("=")[1].toString()));
		var authors=decodeURIComponent(decodeURIComponent((datas.split("&")[1]).toString().split("=")[1].toString()));
		var translators=decodeURIComponent(decodeURIComponent((datas.split("&")[2]).toString().split("=")[1].toString()));
		var presss=decodeURIComponent(decodeURIComponent((datas.split("&")[3]).toString().split("=")[1].toString()));
		var press_times=decodeURIComponent(decodeURIComponent((datas.split("&")[4]).toString().split("=")[1].toString()));
		var prices=decodeURIComponent(decodeURIComponent((datas.split("&")[5]).toString().split("=")[1].toString()));
		var scores=decodeURIComponent(decodeURIComponent((datas.split("&")[6]).toString().split("=")[1].toString()));
		var tags=decodeURIComponent(decodeURIComponent((datas.split("&")[7]).toString().split("=")[1].toString()));
		var img_urls=decodeURIComponent(decodeURIComponent((datas.split("&")[8]).toString().split("=")[1].toString()));
		var urls=decodeURIComponent(decodeURIComponent((datas.split("&")[9]).toString().split("=")[1].toString()));
		
		var bookname=booknames.split(";");
		var author=authors.split(";");
		var translator=translators.split(";");
		var press=presss.split(";");
		var press_time=press_times.split(";");
		var price=function(){
			var ss=prices.split(";")
			var arr=new Array();
			for(var i=0;i<ss.length;i++){
				 var sss=ss[i].split("元")[0].toString();
				 arr.push(sss);	
			}
			return arr;
		
		}();
		var score=scores.split(";");
		var tag=tags;
		var img_url=img_urls.split(";");
		var url=urls;
		
		
		db.da(bookname,author,translator,press,press_time,price,score,tag,img_url,url);
	
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
exports.da=da;