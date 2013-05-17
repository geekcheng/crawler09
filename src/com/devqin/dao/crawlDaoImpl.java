package com.devqin.dao;
import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.noggit.JSONParser;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrServer;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.params.ModifiableSolrParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;

public class crawlDaoImpl{

	 @Autowired
	public JdbcTemplate jdbcTemplate;
	
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public boolean addLink(String link) {
		String _link ='"'+link+'"';
		String sql = "INSERT INTO `crawldata`.`seedsdata` (`seeds`, `flag`, `souce`) VALUES (?, '0', 'u')";
		jdbcTemplate.update(sql,_link);
		String sql2 = "create table tmp as select max(id) as clo1 from seedsdata group by seeds";
		String sql3="delete from seedsdata where id not in (select clo1 from tmp)";
		String sql4="drop table tmp";
		jdbcTemplate.execute(sql2);
		jdbcTemplate.update(sql3);
		jdbcTemplate.execute(sql4);
		return true;	
	}
	
	public String search(String keyWords) throws SolrServerException {
		HttpSolrServer server = new  HttpSolrServer("http://localhost:8080/solr-4.2.1/collection1/");
		ModifiableSolrParams params = new ModifiableSolrParams();
	    params.set("qt", "/select");
	    params.set("q","desc:"+keyWords);
        params.set("start", 0);
        params.set("rows", 5);
	    params.set("wt","json");
	    QueryResponse response = server.query(params);
	    SolrDocumentList docs = response.getResults();
        System.out.println("文档个数：" + docs.getNumFound());
        System.out.println("查询时间：" + response.getQTime());
        return docs.toString();
	}
    

}
