package com.devqin.Action;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import net.sf.json.JSON;

import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
 	//设置
 	@RequestMapping("/set.ac")
 	@ResponseBody
 	public String set(@RequestParam String domain){
 		Boolean set = cdi.set(domain);
 		if(set){
 			return "success";
 		}else{
 			return "error";
 		}
 	}
	

}
