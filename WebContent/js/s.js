$(function(){
	$(".btn").click(function(){
	var keywords=$(".searchinput").val();
	window.location.href="result.html?keyWord="+keywords;
	});

});

