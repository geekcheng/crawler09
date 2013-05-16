$(function(){
	var keywords=(document.URL).split("=")[1];
	
	$.ajax({
		type:'get',
		url:'http://localhost:8080/crawler09/showTou.ac?keyWord='+keywords,
		dataType:"jsonp",
		success:function(data){
			alert(data);
		}
	});
});

