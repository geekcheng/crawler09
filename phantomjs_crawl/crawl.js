var page = require('webpage').create();
var system = require('system');
var address=system.args[1];
	page.open(address, function(status) {
		page.includeJs("http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js",function(){
		var sss=page.evaluate(function() {
			var tc = encodeURIComponent(document.body.innerText).replace(/%0A/g,"").replace(/%20/g,"");
			var href=window.location.href;
			var ha=new Array();

			//对取得的a标签提纯
			var as=function newa(){
					var old_a=document.getElementsByTagName("a");
					var new_a=new Array();
					var lens = old_a.length;
					for(var i=0;i<lens;i++){
						if(old_a.item(i).getAttribute("href")!=null){
							new_a.push(old_a.item(i));
						}
					};
						return new_a;
				}();

			var len = as.length;
			for(var i=0;i<len;i++){
				var cura=as[i].getAttribute("href");
				if(as[i].getAttribute("href").indexOf("http")=="0"){
						ha.push(cura);
					
				}else if(as[i].getAttribute("href").indexOf("/")=="0"){
					cura=cura.substring(1,cura.length-1);
					ha.push(href+cura);
				}
			}
			var ss=ha.join(",");
				jQuery.ajax({
					type: "POST",
					url:"http://127.0.0.1:1337/ajax",
					dataType:"json",
					data:{"url":href,"data":tc,"suba":ss},
					async:false
				});
		    });
		    phantom.exit();
		});

	});