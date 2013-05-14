package com.devqin.dao;
import java.util.List;

import javax.sql.DataSource;


import org.springframework.jdbc.core.JdbcTemplate;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; 

import com.devqin.beans.link;
import com.devqin.beans.sRes;

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
		return true;
		
	}

	public String showToUser(sRes sres) {
		// TODO Auto-generated method stub
		return null;
	}

	public String search(String keyWords) {
		// TODO Auto-generated method stub
		return null;
	}

	public void delRepeat() {
		// TODO Auto-generated method stub
		
	}
    

}
