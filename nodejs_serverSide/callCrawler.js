var server = require("./node");
var crawl=require("./mysqldb");
var crawler = require("./crawler");


	//启动服务，以提供给下面抓取存储数据
	server.startAll();
		
		//此处可以优化，可以监听子进程数量，当小于某一个值时reboot该函数。
	setInterval(function(){crawl.seeds(crawler.startCrawler)},50000);//crawl.seeds(crawler.startCrawler);
	
	