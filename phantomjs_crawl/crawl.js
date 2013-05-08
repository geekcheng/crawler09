var page = require('webpage').create();
var system = require('system');
var address = system.args[1];
console.log("add="+address);
	page.open(address, function(status) {
		page.includeJs("http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js",function(){
		var sss=page.evaluate(function() {
		
			var tc = encodeURIComponent(document.body.innerText).replace(/%0A/g,"").replace(/%20/g,"");
			var domain=document.domain;
			var ha=new Array();
			var addr = document.URL; 

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
						ha.push('"'+cura+'"');
					
				}else if(as[i].getAttribute("href").indexOf("/")=="0"){
					ha.push('"http://'+domain+cura+'"');
				}
			}
			var ss=ha.join(",");
				jQuery.ajax({
					type: "POST",
					url:"http://127.0.0.1:1337/ajax",
					dataType:"json",
					data:{"url":addr,"data":tc,"suba":ss},
					async:false
				});
				//return address;
		    });
		    phantom.exit();
		});


	});
	