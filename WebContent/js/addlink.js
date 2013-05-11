$(function(){
	$(".add").click(function(){
	var link=$(".urlwrite").val();
	jQuery.ajax({
		type: "POST",
		url:"addLink.ac",
		dataType:"jsonp",
		data:{"url":link},
		success:function(data){
			alert(data);
			if(data="success"){
				$(".addSuccess").show();
				
			}
		}
	});
	
	
	});



});

