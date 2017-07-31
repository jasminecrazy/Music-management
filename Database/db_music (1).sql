-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 31, 2017 at 11:14 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_music`
--
CREATE DATABASE IF NOT EXISTS `db_music` DEFAULT CHARACTER SET utf8 COLLATE utf8_vietnamese_ci;
USE `db_music`;

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE IF NOT EXISTS `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `albumId` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `albumName` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`id`, `albumId`, `albumName`) VALUES
(1, 'A1', 'Tiếng Anh'),
(2, 'A2', 'Tiếng Việt'),
(3, 'A1639', 'A1');

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE IF NOT EXISTS `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authorId` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `authorname` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `authorId`, `authorname`) VALUES
(1, 'A1', 'Jackson'),
(2, 'A2', 'Jackson Samatha');

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE IF NOT EXISTS `genre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genreId` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `genreName` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`id`, `genreId`, `genreName`) VALUES
(1, 'G1', 'EDM');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `role_name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `singer`
--

CREATE TABLE IF NOT EXISTS `singer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `singerId` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `singerName` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `singer`
--

INSERT INTO `singer` (`id`, `singerId`, `singerName`) VALUES
(1, 'S1', 'Taylor');

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE IF NOT EXISTS `songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songID` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `songName` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `author_id` int(11) NOT NULL,
  `album_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `singer_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `lyric` text COLLATE utf8_vietnamese_ci,
  PRIMARY KEY (`id`),
  KEY `fk_genre_song` (`genre_id`),
  KEY `fk_author_song` (`author_id`),
  KEY `fk_singer_song` (`singer_id`),
  KEY `fk_album_song` (`album_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci AUTO_INCREMENT=19 ;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `songID`, `songName`, `author_id`, `album_id`, `genre_id`, `singer_id`, `status`, `lyric`) VALUES
(1, 'S1', 'You belong with me', 1, 1, 1, 1, 1, 'You belong with me'),
(2, 'S4188', 'S', 1, 1, 1, 1, 1, 'SSS'),
(5, 'S105', 'k', 1, 1, 1, 1, NULL, 'kjk'),
(6, 'S77', '22', 2, 1, 1, 1, NULL, '22 oh oh');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `fullname` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `phone` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `roleid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `fk_user_role` (`roleid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci AUTO_INCREMENT=18 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `enabled`, `fullname`, `phone`, `email`, `roleid`) VALUES
(1, 'admin', '$2a$10$LJxSNKNHaADkJQS4LQsYXeafeP4t5Jaiz49EEGgb5zyZGIb4nFmzW', 1, 'Jasmine', '01225543977', 'jasmine@gmail.com', 1),
(9, 'mai', '$2a$12$cT3cCWKyzrPrmrdBHWAcCOHf..LjgQBIMu/DyGkxnj5L/NMKsdkQ2', 0, 'Msai', '123456', 'suongpham53@gmail.com', 2),
(10, 'acc1', '$2a$12$jp7ZNgkeqGwE5PxBuocDCOME2U0VO.cbtAI/xwqCSwTtyxgDXCKcK', 1, 'maiNguyen', '01225543', 'suongpham53@gmail.com', 2),
(11, 'jasmine', '123', 1, 'Pham Thi Thu Suong', '01225543977', 'suongpham53@gmail.com', 2),
(13, 'Jackson6445', '123456', 0, 'Jackson Samatha', '012233', 'suongpham@gmail.com', 2),
(15, 'maithanh', 'sdasd', 1, 'dasdas', 'asdasd', 'sadasd', 2),
(16, 'Jackson723', '$2a$12$557c40x.5EVxvAgijkZ10ul88GDeKyebnOSNTulpjuYc7Tbcwhpqq', 0, 'Jackson Samatha', '012233', 'suongpham@gmail.com', 2),
(17, 'maianh', '$2a$12$bW5h.kcXTscKiQmKkX8gdefqV3TE1zu0iIapNhmUzmBOGpbMIFiP6', 1, 'jjjjj', 'jjjj', 'jjjj', 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `fk_album_song` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`),
  ADD CONSTRAINT `fk_author_song` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  ADD CONSTRAINT `fk_genre_song` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  ADD CONSTRAINT `fk_singer_song` FOREIGN KEY (`singer_id`) REFERENCES `singer` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_role` FOREIGN KEY (`roleid`) REFERENCES `role` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
