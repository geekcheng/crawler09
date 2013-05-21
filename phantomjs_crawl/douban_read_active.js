var page = require('webpage').create();
var system = require('system');
var address = system.args[1];
console.log("add="+address);
	page.open(address, function(status) {
		page.includeJs("http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js",function(){
		var sss=page.evaluate(function() {
		//bookname,author,translator,press,press_time,price,score,tag,img_url,url
		var info=$(".info");
		var pub=$(".info .pub");
		var nbg=$(".nbg img");
		var tag=$("#content h1").text().split(":")[1].toString();
		var url=document.URL;
		var rating_nums=$(".info .star .rating_nums");
		var score=function(){
			var ss=[];
			for(var i=0;i<19;i++){
			ss.push(rating_nums.eq(i).text());
			};
			return ss;
		}();
		var img_url=function(){
			var imgs=new Array();
			for(var i=0;i<19;i++){
				imgs.push(nbg.eq(i).attr("src"));
			}
			return imgs;
		
		
		}();
		
		//获取书名
		var bookname=function(){
			var names=[];
			for(var i=0;i<19;i++){
				names.push(info.find("h2").find("a").eq(i).attr("title"));
			}
				return names;
		}();
		//取得 作者 翻译者 出版社 出版时间 售价的信息
		var pubs = function(){
			var all=[];
			var author=[];
			var translator=[];
			var press=[];
			var press_time=[];
			var price=[];
			
			for(var i=0;i<19;i++){
				var data=pub.eq(i).text().split("/");
				var size=data.length;
				
				//如果size=4，说明没有翻译者，否则翻译者是第一位
				
				if(size==4){
					translator.push("N");
					author.push(data[0]);
					press.push(data[1]);
					press_time.push(data[2]);
					price.push(data[3]);
				}else{
					translator.push(data[0]);
					author.push(data[1]);
					press.push(data[2]);
					press_time.push(data[3]);
					price.push(data[4]);
				}
			}			
			all.push(translator,author,press,press_time,price);
			return all;
		}();
		var translator=pubs[0];
		var author=pubs[1];
		var press=pubs[2];
		var press_time=pubs[3];
		var price=pubs[4];
		
		//把获得的数据封装成数组
				jQuery.ajax({
					type: "POST",
					url:"http://127.0.0.1:1337/da",
					dataType:"json",
					data:{
					"bookname":bookname,"author":author,"translator":translator,"press":press,
					"press_time":press_time,"price":price,"score":score,"tag":tag,"img_url":img_url,"url":url},
					async:false
				});
				//return address;
		    });
		    phantom.exit();
		});
	});
	