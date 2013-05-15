package com.devqin.dao;
import java.util.List;

import javax.sql.DataSource;


import org.springframework.jdbc.core.JdbcTemplate;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

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

	//public String showToUser(sRes sres) {
		// TODO Auto-generated method stub
		//return null;
	//}

	public String search(String keyWords) {
		// TODO Auto-generated method stub
		return null;
	}
    

}
