//http://www.baidu.com

function finda(url,as){
		var ha=new Array();
		var len = as.size();
		for(var i=0;i<len;i++){
		var cura=as.eq(i).attr("href");
		if(cura.indexOf("http")=="-1"){
			ha.push(url+cura);
		}else{
		ha.push(cura);
		}
		}
	return ha;
}

//exports.finda = finda;