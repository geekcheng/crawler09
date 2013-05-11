package com.devqin.dao;
import com.devqin.beans.sRes;


public interface crawlDao {
	//添加链接
	public String addLink(String link);
	
	//展示给用户提交的链接的url的抓取结果
	public String showToUser(sRes sres); 
	
	//搜索功能
	public String search(String keyWords);
	
	//数据去重
	public void delRepeat();
	
	

	
	
}
