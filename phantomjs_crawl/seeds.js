var page = require('webpage').create();
var crawl = require("./crawl");
var seedsPage="http://127.0.0.1:1337/seeds";

page.open(seedsPage,function(status){
if(status){
var urls=page.plainText;
var urlarray=urls.split(",");
for(var i=0;i<urlarray.length;i++){
	crawl.crawlers(urlarray[0]);
};

}
//phantom.exit();
});