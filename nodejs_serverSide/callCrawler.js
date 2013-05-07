var exec = require('child_process').exec,
    child;
    var url = ["http://sae.sina.com.cn/?m=front&a=success_case","http://sae.sina.com.cn/","http://www.m.bing.com/","http://www.qintengfeidev.com/"];
   //var url = ["http://m.cn.bing.com/"];
for(var i in url){
	child = exec("phantomjs /develop/Espace/crawler09/phantomjs_crawl/crawl.js "+url[i],
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});
}
	