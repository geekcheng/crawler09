$(function(){
	$(".add").click(function(){
		var link=$(".urlwrite").val();
		$.ajax({
			type: "POST",
			url:"addLink.ac",
			dataType:"string",
			data:{"link":link},
			success:function(data){
				if(data="success"){
					$(".addSuccess").show();
				}
			}
		});
		
	});

});

