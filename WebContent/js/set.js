$(function(){
	$(".btn").click(function(){
		var domain=$(".domain").val();
		$.ajax({
			type: "POST",
			url:"set.ac",
			dataType:"string",
			data:{"domain":domain},
			success:function(data){
				if(data="success"){
					alert("设置成功!");
				}
			}
		});
		
	});

});

