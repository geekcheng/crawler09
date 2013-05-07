var handler= require("./requestHandlers");

 function route(response,datas,pathname){
	 if(pathname=="/ajax"){
		handler.save(response,datas);
	 }else if(pathname=="/start"){
	 handler.start(response);
	 }
 
 }
 
 exports.route = route;