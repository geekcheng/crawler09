var server = require("./node");
var crawl=require("./mysqldb");
var crawler = require("./crawler");


	//启动服务，以提供给下面抓取存储数据
	server.startAll();	
	setInterval(function(){crawl.seda(crawler.startDa)},50000);
	
	
	
	
	
	             
	