-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: localhost    Database: wxapp
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access`
--

DROP TABLE IF EXISTS `access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `access` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'only mark',
  `token` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'access_token',
  `expires` int NOT NULL COMMENT 'expire time，unit(s)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access`
--

LOCK TABLES `access` WRITE;
/*!40000 ALTER TABLE `access` DISABLE KEYS */;
INSERT INTO `access` VALUES (1,'38_UhtLqLk08b3s1K3hgKXVxTUBYEiADSLNSiL5a81xOdhqHjSk2XrAr0q0ieg-MA5X-o6OMxrOvN5bRemaBKQPM-MGEHplcBvVSjMaXu07MuknrpGU4Q6RBEvaMMlBRUUk1OUw-I2EnI3cXrmsIWJdAGAVJW',7200);
/*!40000 ALTER TABLE `access` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activitys`
--

DROP TABLE IF EXISTS `activitys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activitys` (
  `bkid` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'activityid',
  `bkclass` int DEFAULT NULL COMMENT 'activity class',
  `nlimit` int DEFAULT '60',
  `bkname` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'activity name',
  `bkauthor` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'activity publisher and date',
  `bkpublisher` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'activity description',
  `bkfile` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'activity resources',
  `bkcover` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '' COMMENT 'activity cover',
  `bkprice` int DEFAULT '1' COMMENT 'activity point cost',
  PRIMARY KEY (`bkid`)
) ENGINE=InnoDB AUTO_INCREMENT=1000000007 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activitys`
--

LOCK TABLES `activitys` WRITE;
/*!40000 ALTER TABLE `activitys` DISABLE KEYS */;
INSERT INTO `activitys` VALUES (100000001,1,8,'休闲麻将','新宿','休闲麻将，娱乐为主，不打钱','','https://img9.doubanio.com/view/photo/l/public/p2622623745.jpg',1),(100000003,2,8,'休闲麻将','心斋桥','休闲麻将，娱乐为主，不打钱','','https://img9.doubanio.com/view/photo/l/public/p2622623745.jpg',1),(100000005,3,8,'休闲麻将','京都大学学生宿舍','休闲麻将，娱乐为主，不打钱','','https://img9.doubanio.com/view/photo/l/public/p2622623745.jpg',1),(200000002,2,12,'海底捞','大阪海底捞','大阪海底捞','','https://img2.doubanio.com/view/photo/l/public/p2622721663.jpg',1),(300000002,3,4,'羽毛球','京都大学体育馆','羽毛球，运动局，会扣球的来','','https://img9.doubanio.com/view/photo/l/public/p2622721665.jpg',1),(400000001,1,14,'狼人杀','新宿','线下桌游聚会，狼人杀','','https://img2.doubanio.com/view/photo/l/public/p2622722363.jpg',1),(400000002,1,10,'剧本杀','涉谷','线下桌游聚会，剧本杀','','https://img3.doubanio.com/view/photo/l/public/p2622722362.jpg',1),(400000004,1,14,'阿瓦隆','池袋','线下桌游聚会，阿瓦隆','','https://img1.doubanio.com/view/photo/l/public/p2622722368.jpg',1),(500000001,1,6,'富士山一日游','富士山','富士山走起，希望那天没有云','','https://img1.doubanio.com/view/photo/l/public/p2622722359.jpg',1),(600000001,2,40,'广场舞','大阪','中老年健身广场舞','','https://img3.doubanio.com/view/photo/l/public/p2622722360.jpg',1),(600000002,1,60,'hippop舞社招人','新宿','喜欢hippop的人快来吧，没有基本功要求','','https://img3.doubanio.com/view/photo/l/public/p2622722361.jpg',1),(700000001,1,10,'茶话会','10月18日  听白甜品茶社','吃糕点，撸狗，聊天，喝茶，交友','','https://img9.doubanio.com/view/photo/l/public/p2622720616.jpg',1),(700000002,1,60,'8 minites date','待定，涉谷','期待么？','','https://img1.doubanio.com/view/photo/l/public/p2622625808.jpg',1),(700000004,1,10,'茶话会','10月25日 听白甜品茶社','吃糕点，撸狗，聊天，喝茶','','https://img3.doubanio.com/view/photo/l/public/p2622720642.jpg',1),(800000001,101,10,'LOL开黑','亚洲时区晚上','坑的别来','','https://img9.doubanio.com/view/photo/l/public/p2622624044.jpg',1),(800000002,101,10,'DATA开黑','亚洲时区晚上','打排位局','','https://img1.doubanio.com/view/photo/l/public/p2622722358.jpg',1),(800000003,101,8,'三国杀开黑','亚洲时区晚上','休闲局，能玩国战的来','','https://img9.doubanio.com/view/photo/l/public/p2622722366.jpg',1),(800000004,101,4,'吃鸡开黑','亚洲时区晚上','有大神带，躺鸡局','','https://img9.doubanio.com/view/photo/l/public/p2622721666.jpg',1);
/*!40000 ALTER TABLE `activitys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `cmid` int unsigned NOT NULL AUTO_INCREMENT COMMENT '评论id',
  `uid` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'user openid',
  `uname` varchar(48) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'user name',
  `ccontent` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'comment content',
  `bkname` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'activity name',
  `bkid` int NOT NULL COMMENT 'activity ID',
  `uavatar` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'user avatar',
  `ctime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'comment time',
  PRIMARY KEY (`cmid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;

/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `oid` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'order ID',
  `uid` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'user openid',
  `oprice` int DEFAULT '0' COMMENT 'activity point',
  `otime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'order time',
  `bkid` int NOT NULL COMMENT 'activity ID',
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (9,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-14 13:03:05',700000001),(10,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-14 13:13:09',100000005),(11,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-14 13:13:55',500000001),(12,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-14 13:14:08',600000002),(13,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-14 13:16:10',100000001),(14,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-14 13:20:20',700000002),(15,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-14 13:22:32',700000004),(16,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-14 13:35:08',800000003),(17,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-14 14:06:23',400000001),(18,'oIRBA5fPE6OUouoDPjBWYl3ReA4E',1,'2020-10-15 01:46:32',400000004);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'user openid',
  `uname` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '' COMMENT 'user Wechat name',
  `ugender` int DEFAULT NULL COMMENT 'user sex',
  `uaddress` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'user address',
  `ubalance` int DEFAULT NULL COMMENT 'user point left',
  `uavatar` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'user avatar',
  `skey` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'user login mark',
  `sessionkey` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'Wechat login mark',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'user register time',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'user recent login time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-15  9:49:03
