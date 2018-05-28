--
-- Table structure for table `wpn_user`
--

DROP TABLE IF EXISTS `wpn_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wpn_user` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '',
  `description` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wpn_user`
--

LOCK TABLES `wpn_user` WRITE;
/*!40000 ALTER TABLE `wpn_user` DISABLE KEYS */;
INSERT INTO `wpn_user` VALUES (1,'普通用户','0'),(2,'vip','10000');
/*!40000 ALTER TABLE `wpn_user` ENABLE KEYS */;
UNLOCK TABLES;