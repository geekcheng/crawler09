$(function(){
	var keywords=(document.URL).split("=")[1];
	var start=0;
	
	
	$.ajax({
		type:'post',
		url:'http://localhost:8080/solr-4.2.1/collection1/select?q=desc:'+keywords+'&start='+start+'&rows=10&wt=json&indent=true',
		dataType:"json",
		success:function(data){
		var rsnumber=data.response.numFound;
		var qTime = data.responseHeader.QTime;
		var rs=data.response.docs;
		var size=rs.length;
		for(start=0;start<10;start++){
			$(".rs").append(
			"<div class='f span7'>"+
			"<a href="+rs[start].href +" class='title ellipsis'>"+rs[start].title+"</a>"+
			"<p class='preview'>"+rs[start].desc.substr(0,160)+"...</p>"+
			"<p class='append'><span class='link ellipsis'>"+rs[start].href+"</span><span class='intime'>"+rs[start].time+"</span></p></div>"
			);
		
		
		
		}
		}
	});
});

