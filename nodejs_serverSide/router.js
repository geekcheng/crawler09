/**
 * 
 */
var handler= require("./requestHandlers");

 function route(response,datas,pathname){
	 if(pathname=="/ajax"){
		handler.saveData(response,datas);
	 }else if(pathname=="/start"){
	 handler.start(response);
	 }else if(pathname=="/seeds"){
	 	handler.seeds(response);
	 }
 
 }
 
 exports.route = route;