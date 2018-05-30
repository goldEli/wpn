--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(100) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('c0a42bfcd79545ec98a8fc72ebbbb8d6', 'kk', '');
INSERT INTO `users` VALUES ('3c410edc281445758ffdd9cb681170f6', '张华', '');
INSERT INTO `users` VALUES ('0b9f9ce3c56d475ea3e86de94152993a', 'huahua', '');
INSERT INTO `users` VALUES ('33403c6fd3db44faabb7e86ac1a835cd', '庙宇', '');
INSERT INTO `users` VALUES ('f42ca3a41f394519bf9d1e877beb0286', '8852', '');
INSERT INTO `users` VALUES ('e47743a8b1aa4c48985b38342df17c4d', '789', '');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;