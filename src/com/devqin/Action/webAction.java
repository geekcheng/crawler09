package com.devqin.Action;

import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.devqin.dao.crawlDaoImpl;

@Controller
//@RequestMapping("/webAction")
public class webAction {
	@Autowired 
	public crawlDaoImpl cdi;
 
	public void setCdi(crawlDaoImpl cdi) {
		this.cdi = cdi;
	}

	public crawlDaoImpl getCdi() {
		return cdi;
	}

	//添加链接
 	@RequestMapping("/addLink.ac")
 	@ResponseBody
	public String addLink(@RequestParam String link) {
 		Boolean insert = cdi.addLink(link);
 		
 		if(insert){
 			return "success";
 		}else{
 			return "error";
 		}
	}
	
	//搜索功能
 	@RequestMapping("/showTou")
	public String search(String keyWords) {
		try {
			cdi.search(keyWords);
		} catch (SolrServerException e) {
			e.printStackTrace();
		}
		return "addlink.html" ;
		
	}
	 
}
