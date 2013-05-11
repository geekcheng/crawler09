package com.devqin.dao;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; 

import com.devqin.beans.link;
import com.devqin.beans.sRes;

public class crawlDaoImpl implements crawlDao {

	 @Autowired
	public JdbcTemplate jdbcTemplate;
	
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public String addLink(String link) {
		String sql = "INSERT INTO seedsdata (`id`, `seeds`, `flag`, `souce`) VALUES ('0', '?', '0', 'c')";
		//jdbcTemplate.update(sql, link);
		//String ss=(String)this.jdbcTemplate.update(sql);
		int in = this.jdbcTemplate.update(sql);
		//System.out.println("url to save is "+in);
		System.out.println(link);
		return "true";
		
	}

	@Override
	public String showToUser(sRes sres) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String search(String keyWords) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delRepeat() {
		// TODO Auto-generated method stub
		
	}
    

}
