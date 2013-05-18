CREATE DATABASE  IF NOT EXISTS `crawldata` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `crawldata`;
-- MySQL dump 10.13  Distrib 5.5.31, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: crawldata
-- ------------------------------------------------------
-- Server version	5.5.31-0ubuntu0.12.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `spedata`
--

DROP TABLE IF EXISTS `spedata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spedata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookname` varchar(50) DEFAULT NULL COMMENT '书名',
  `author` varchar(45) DEFAULT NULL COMMENT '作者',
  `translator` varchar(45) DEFAULT NULL COMMENT '翻译者',
  `press` varchar(45) DEFAULT NULL COMMENT '出版社',
  `press_time` varchar(45) DEFAULT NULL COMMENT '出版时间',
  `price` varchar(45) DEFAULT NULL COMMENT '售价',
  `score` varchar(45) DEFAULT NULL COMMENT '评分',
  `ratings` varchar(45) DEFAULT NULL COMMENT '评价人数',
  `tag` varchar(45) DEFAULT NULL COMMENT '标签',
  `lowest` varchar(45) DEFAULT NULL COMMENT '最低价',
  `img_url` varchar(45) DEFAULT NULL COMMENT '最低价url',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='数据分析的数据库表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contents`
--

DROP TABLE IF EXISTS `contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `href` tinytext NOT NULL,
  `data` mediumtext NOT NULL,
  `title` text NOT NULL,
  `crawltime` date NOT NULL,
  `domain` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=257 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `seedsdata`
--

DROP TABLE IF EXISTS `seedsdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seedsdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seeds` text,
  `domain` varchar(45) DEFAULT NULL,
  `flag` char(1) DEFAULT '0',
  `souce` char(1) DEFAULT 's' COMMENT '"s" from seeds,"u" from "user"',
  `realstatus` char(1) DEFAULT '1',
  `parent` text,
  `deepth` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5489 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-05-18 23:34:41
