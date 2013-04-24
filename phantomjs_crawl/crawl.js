var page = require('webpage').create();
var url="http://www.oschina.net/";

page.open(url, function(status) {
	page.includeJs("http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js",function(){
		page.evaluate(function() {
		var tc =document.body.innerText;
		var href=window.location.href;
			//抓取内容返回到nodejs进行持久化处理。
			$.ajax({
				type: "POST",
				url:"http://127.0.0.1:1337/ajax",
				dataType:"text",
				data:{"url":href,"data":tc}
				//success:function(){
				//console.log("crawler09 has been crawler "+href+" at "+Date.now());
				//}
			});
			//return href+tc;
	    });
	    //console.log(title);
	    //phantom.exit();
	});

});





