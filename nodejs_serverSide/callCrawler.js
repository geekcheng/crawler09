var server = require("./node");
var exec = require('child_process').exec,child;
server.startAll();
    
    var url = ["http://www.mongodb.org/","http://nodejs.org/","http://sae.sina.com.cn/","http://cn.bing.com/"];
    
	for(var i in url){
	child = exec("/usr/bin/phantomjs /develop/Espace/crawler09/phantomjs_crawl/crawl.js "+url[i],
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});
}
	