var exec = require('child_process').exec,child;

function startCrawler(url){
    //var url = ["http://www.oucqdc.edu.cn/","http://www.so.com/"];
    console.log("Crawler is Started.And url is "+url);
//	for(var i in url){
	child = exec("/usr/bin/phantomjs /develop/Espace/crawler09/phantomjs_crawl/crawl.js "+url,
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	}).on("close",function(){
	console.log("aaaaaa,i will close!!");
	});
//}
}


function startDa(url){
    //var url = ["http://www.oucqdc.edu.cn/","http://www.so.com/"];
    console.log("Crawler is Started.And url is "+url);
//	for(var i in url){
	child = exec("/usr/bin/phantomjs /develop/Espace/crawler09/phantomjs_crawl/douban_read_active.js "+url,
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	}).on("close",function(){
	console.log("aaaaaa,i will close!!");
	});
//}
}

exports.startCrawler=startCrawler;
exports.startDa=startDa;
	