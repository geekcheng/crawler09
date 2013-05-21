$(function(){
	var keywords=(document.URL).split("=")[1];
	if(keywords!=null){
	$(".key").attr("value",decodeURI(keywords));
	}
	var start=$("#hide").val();
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

$(".pre").click(function(){
	var start=parseInt($("#hide").val())-10;
	$("#hide").attr("value",start);
	alert(start);
	if(start<=0){
		start=0;
		alert("当前页已经是第一页");
		}
		$.ajax({
		type:'post',
		url:'http://localhost:8080/solr-4.2.1/collection1/select?q=desc:'+keywords+'&start='+start+'&rows=10&wt=json&indent=true',
		dataType:"json",
		success:function(data){
		var rsnumber=data.response.numFound;
		var qTime = data.responseHeader.QTime;
		var rs=data.response.docs;
		var size=rs.length;
		$(".rs").empty();
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

$(".next").click(function(){
	var start=parseInt($("#hide").val())+10;
	$("#hide").attr("value",start);
	alert(start);
		$.ajax({
		type:'post',
		url:'http://localhost:8080/solr-4.2.1/collection1/select?q=desc:'+keywords+'&start='+start+'&rows=10&wt=json&indent=true',
		dataType:"json",
		success:function(data){
		var rsnumber=data.response.numFound;
		var qTime = data.responseHeader.QTime;
		var rs=data.response.docs;
		var size=rs.length;
		$(".rs").empty();
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
	
	
	
});
$(".search").click(function(){
	var keywords=$(".key").val();
	window.location.href="result.html?keyWord="+keywords;
});

