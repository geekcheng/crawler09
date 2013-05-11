/**
 *为每页添加nav
 */
window.onload = function(){
	var bodyBox=document.body;
	var nav=document.createElement("ul");
	var navbar='<li><a class="brand" href="./addlink.html">提交链接</a></li>'+
		'<li><a class="brand" href="./setting.html">抓取配置</a></li>'+
	'<li><a class="brand" href="./search.html">搜索展示</a></li>'+
	'<li><a class="brand" href="./result.html">搜索结果</a></li>'+
	'<li><a class="brand" href="./graphics.html">数据图形化</a></li>';
	nav.innerHTML=navbar;
	nav.setAttribute("class", "nav_box offset5 nav nav-tabs");
	bodyBox.insertBefore(nav,document.body.firstChild);

	var url=location.href;
	var s=url.split("/");
    var id = s[s.length-1].split(".")[0];
    var ul = document.getElementsByTagName("ul")[0];
   	var len = ul.getElementsByTagName("li").length;
    switch(id){
    	case "addUrl":
    			ul.getElementsByTagName("li")[0].className="active";
    	break;
    	case "setting":
    	    			ul.getElementsByTagName("li")[1].className="active";
    	break;
    	case "search":
    			ul.getElementsByTagName("li")[2].className="active";
    	break;
    	case "result":
    	    	ul.getElementsByTagName("li")[3].className="active";
    	break;
    	case "graphics":
    			ul.getElementsByTagName("li")[4].className="active";
    	break;
    	default:
    			ul.getElementsByTagName("li")[0].className="active";
    	break;



    }


};
