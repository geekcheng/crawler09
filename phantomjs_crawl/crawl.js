var page = require('webpage').create();
var url="http://www.oschina.net/";

page.open(url, function(status) {
	page.includeJs("http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js",function(){
		page.evaluate(function() {
		var tc =document.body.innerText;
		var href=window.location.href;
			$.ajax({
				type: "POST",
				url:"http://127.0.0.1:1337/ajax",
				dataType:"text",
				data:{"url":href,"data":tc}
			});
	    });
	});

});





