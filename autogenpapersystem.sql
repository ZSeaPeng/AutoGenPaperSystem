/*
Navicat MySQL Data Transfer

Source Server         : pi_mysql
Source Server Version : 50552
Source Host           : 10.7.90.140:3306
Source Database       : autogenpapersystem

Target Server Type    : MYSQL
Target Server Version : 50552
File Encoding         : 65001

Date: 2016-10-21 16:17:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for charaction
-- ----------------------------
DROP TABLE IF EXISTS `charaction`;
CREATE TABLE `charaction` (
  `Charact_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Charact_name` varchar(50) NOT NULL,
  PRIMARY KEY (`Charact_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of charaction
-- ----------------------------
INSERT INTO `charaction` VALUES ('1', '历年高考真题');
INSERT INTO `charaction` VALUES ('2', '名校模拟');
INSERT INTO `charaction` VALUES ('3', '原创');

-- ----------------------------
-- Table structure for difficulty
-- ----------------------------
DROP TABLE IF EXISTS `difficulty`;
CREATE TABLE `difficulty` (
  `Difficulty_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Uplimit` double NOT NULL,
  `Lowlimit` double NOT NULL,
  `Describe` varchar(10) NOT NULL,
  PRIMARY KEY (`Difficulty_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of difficulty
-- ----------------------------
INSERT INTO `difficulty` VALUES ('1', '1', '0.86', '容易');
INSERT INTO `difficulty` VALUES ('2', '0.85', '0.71', '较易');
INSERT INTO `difficulty` VALUES ('3', '0.7', '0.56', '中等');
INSERT INTO `difficulty` VALUES ('4', '0.55', '0.41', '较难');
INSERT INTO `difficulty` VALUES ('5', '0.4', '0.26', '困难');

-- ----------------------------
-- Table structure for grade
-- ----------------------------
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `Grade_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Grade_name` varchar(10) NOT NULL,
  PRIMARY KEY (`Grade_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of grade
-- ----------------------------
INSERT INTO `grade` VALUES ('1', '高中');
INSERT INTO `grade` VALUES ('2', '初中');
INSERT INTO `grade` VALUES ('3', '小学');

-- ----------------------------
-- Table structure for knowledge
-- ----------------------------
DROP TABLE IF EXISTS `knowledge`;
CREATE TABLE `knowledge` (
  `Knowledge_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Knowledge_name` varchar(100) NOT NULL,
  `Subject_ID` int(11) NOT NULL,
  `Superior_ID` int(11) DEFAULT '0',
  PRIMARY KEY (`Knowledge_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of knowledge
-- ----------------------------
INSERT INTO `knowledge` VALUES ('1', '基础知识及语言表达', '1', '0');
INSERT INTO `knowledge` VALUES ('2', '常用字的字音', '1', '1');
INSERT INTO `knowledge` VALUES ('3', '扩展语句、压缩语段', '1', '1');
INSERT INTO `knowledge` VALUES ('4', '语言表达', '1', '3');
INSERT INTO `knowledge` VALUES ('5', '诗歌鉴赏', '1', '0');
INSERT INTO `knowledge` VALUES ('6', '文言文阅读', '1', '0');
INSERT INTO `knowledge` VALUES ('7', '现代文阅读', '1', '0');
INSERT INTO `knowledge` VALUES ('11', '词汇', '3', '0');
INSERT INTO `knowledge` VALUES ('12', '完形填空', '3', '0');
INSERT INTO `knowledge` VALUES ('13', '阅读理解', '3', '0');
INSERT INTO `knowledge` VALUES ('14', '导数与函数', '2', '0');
INSERT INTO `knowledge` VALUES ('15', '三角函数', '2', '0');
INSERT INTO `knowledge` VALUES ('16', '拼写', '3', '11');
INSERT INTO `knowledge` VALUES ('17', '断句', '1', '6');
INSERT INTO `knowledge` VALUES ('18', '解三角形', '2', '15');
INSERT INTO `knowledge` VALUES ('19', '函数', '2', '14');
INSERT INTO `knowledge` VALUES ('20', '文学类', '1', '7');
INSERT INTO `knowledge` VALUES ('21', '细胞的分子组成', '6', '0');
INSERT INTO `knowledge` VALUES ('22', '蛋白质、核酸的结构和功能', '6', '21');
INSERT INTO `knowledge` VALUES ('23', '糖类、脂肪的种类和作用', '6', '21');
INSERT INTO `knowledge` VALUES ('24', '经济生活', '8', '0');
INSERT INTO `knowledge` VALUES ('25', '生活与消费', '8', '24');
INSERT INTO `knowledge` VALUES ('26', '导数', '2', '14');
INSERT INTO `knowledge` VALUES ('27', '极限', '2', '14');
INSERT INTO `knowledge` VALUES ('28', '解析式', '2', '19');
INSERT INTO `knowledge` VALUES ('29', '反函数', '2', '19');
INSERT INTO `knowledge` VALUES ('30', '人类遗传病', '6', '0');
INSERT INTO `knowledge` VALUES ('31', '人类遗传病的类型', '6', '30');
INSERT INTO `knowledge` VALUES ('32', '细胞的代谢', '6', '0');
INSERT INTO `knowledge` VALUES ('33', '细胞的呼吸', '6', '32');
INSERT INTO `knowledge` VALUES ('34', '近代世界', '9', '0');
INSERT INTO `knowledge` VALUES ('35', '近代科学技术', '9', '34');
INSERT INTO `knowledge` VALUES ('36', '现代世界', '9', '0');
INSERT INTO `knowledge` VALUES ('37', '现代科学技术', '9', '36');
INSERT INTO `knowledge` VALUES ('38', '化学实验', '5', '0');
INSERT INTO `knowledge` VALUES ('39', '实验探究', '5', '38');
INSERT INTO `knowledge` VALUES ('40', '化学反应原理', '5', '0');
INSERT INTO `knowledge` VALUES ('41', '电化学', '5', '40');

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `Questions_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Content` varchar(500) COLLATE utf8_bin NOT NULL,
  `QuesPic_URL` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `Subject_ID` int(11) NOT NULL DEFAULT '0',
  `Knowledge_ID1` int(11) DEFAULT '0',
  `Knowledge_ID2` int(11) DEFAULT '0',
  `Knowledge_ID3` int(11) DEFAULT '0',
  `Knowledge_ID4` int(11) DEFAULT '0',
  `Type_ID` int(11) NOT NULL DEFAULT '0',
  `Difficulty_ID` int(11) NOT NULL DEFAULT '0',
  `Charact_ID` int(11) NOT NULL DEFAULT '0',
  `Isdelete` tinyint(1) NOT NULL DEFAULT '0',
  `Answer` varchar(100) COLLATE utf8_bin DEFAULT '略',
  `AnswerPic_URL` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`Questions_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of questions
-- ----------------------------
INSERT INTO `questions` VALUES ('1', 'qewretyytiyopi', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id1.JPG', '1', '1', '3', '4', '0', '1', '5', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id1.JPG');
INSERT INTO `questions` VALUES ('2', 'uijsidofoei', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id2.JPG', '3', '2', '0', '0', '0', '3', '4', '1', '0', '略', null);
INSERT INTO `questions` VALUES ('3', 'dajfioef', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id3.JPG', '4', '6', '0', '0', '0', '8', '3', '3', '0', '略', null);
INSERT INTO `questions` VALUES ('4', 'ffbfb', null, '5', '2', '0', '0', '0', '7', '2', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('8', 'dfefdfef', null, '6', '11', '16', '0', '0', '6', '3', '1', '0', '略', null);
INSERT INTO `questions` VALUES ('9', 'ghdjghg', null, '3', '9', '0', '0', '0', '13', '3', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('10', 'trhtjfgt', null, '4', '7', '0', '0', '0', '18', '1', '3', '0', '略', null);
INSERT INTO `questions` VALUES ('11', 'fghhgjdgh', null, '6', '5', '0', '0', '0', '17', '3', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('13', '唐诗', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id13.JPG', '1', '5', '0', '0', '0', '2', '2', '1', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id13.JPG');
INSERT INTO `questions` VALUES ('14', '修改病句', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id14.JPG', '1', '1', '3', '4', '0', '6', '3', '2', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id14.JPG');
INSERT INTO `questions` VALUES ('15', '幂函数', null, '2', '14', '19', '0', '0', '2', '2', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('16', '测试题目', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id16.JPG', '1', '1', '3', '4', '0', '1', '5', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id16.JPG');
INSERT INTO `questions` VALUES ('17', '测试2', null, '6', '11', '16', '0', '0', '6', '3', '1', '0', '略', null);
INSERT INTO `questions` VALUES ('18', '测试题目内容2', null, '6', '11', '16', '0', '0', '6', '3', '1', '0', '略', null);
INSERT INTO `questions` VALUES ('19', '11', null, '2', '14', '19', '0', '0', '1', '5', '3', '0', '略', null);
INSERT INTO `questions` VALUES ('20', 'tsest111', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id20.JPG', '1', '1', '3', '4', '0', '1', '5', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id20.JPG');
INSERT INTO `questions` VALUES ('21', '蛋白质', null, '6', '21', '22', '0', '0', '1', '4', '3', '0', '略', null);
INSERT INTO `questions` VALUES ('23', '货币de jiazhi', null, '8', '24', '25', '0', '0', '19', '3', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('24', '消费zenmesuan', null, '8', '24', '25', '0', '0', '19', '5', '1', '0', '略', null);
INSERT INTO `questions` VALUES ('25', '极限的定义', null, '2', '14', '26', '0', '0', '20', '3', '3', '0', '略', null);
INSERT INTO `questions` VALUES ('26', 'hanshujiexishi', null, '2', '14', '19', '0', '0', '20', '4', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('27', '反函数的性质', null, '2', '14', '19', '29', '0', '9', '2', '1', '0', '略', null);
INSERT INTO `questions` VALUES ('28', '诗', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id28.JPG', '1', '5', '0', '0', '0', '5', '3', '1', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id28.JPG');
INSERT INTO `questions` VALUES ('29', '如何断句', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id29.JPG', '1', '6', '17', '0', '0', '3', '2', '2', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id29.JPG');
INSERT INTO `questions` VALUES ('30', '指南针的发明', null, '9', '34', '35', '0', '0', '3', '5', '3', '0', '略', null);
INSERT INTO `questions` VALUES ('31', '蛋白质的产生', null, '6', '32', '33', '0', '0', '7', '1', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('32', '电解液原理', null, '5', '38', '39', '0', '0', '6', '4', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('33', '化学毒性', null, '5', '40', '41', '0', '0', '0', '2', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('34', '大型蛋白质', null, '6', '32', '33', '0', '0', '4', '2', '1', '0', '略', null);
INSERT INTO `questions` VALUES ('35', '糖类的水解', null, '6', '32', '33', '0', '0', '12', '3', '3', '0', '略', null);
INSERT INTO `questions` VALUES ('36', '化学安全实验', null, '5', '38', '39', '0', '0', '6', '4', '2', '0', '略', null);
INSERT INTO `questions` VALUES ('37', '世界地图', null, '9', '36', '37', '0', '0', '8', '1', '3', '0', '略', null);
INSERT INTO `questions` VALUES ('38', '子曰', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id38.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id38.JPG');
INSERT INTO `questions` VALUES ('39', '孔子', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id39.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id39.JPG');
INSERT INTO `questions` VALUES ('40', '孟子', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id40.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id40.JPG');
INSERT INTO `questions` VALUES ('41', '学而不思', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id41.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id41.JPG');
INSERT INTO `questions` VALUES ('42', '测试题目', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id42.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id42.JPG');
INSERT INTO `questions` VALUES ('43', '请点击下面链接激活您的帐号（如无法点击，请复制网址到浏览器地址栏敲回车即可）： \r\n', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id43.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id43.JPG');
INSERT INTO `questions` VALUES ('44', '题目测试', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id44.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id44.JPG');
INSERT INTO `questions` VALUES ('45', '1222323为323<dqljbe61503@chacuo.net>', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id45.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id45.JPG');
INSERT INTO `questions` VALUES ('46', 'http://24mail.chacuo.net/', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id46.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id46.JPG');
INSERT INTO `questions` VALUES ('47', '/1/1/1/1/1/1//1/1/1/1/1//1/1/1/1//1/sbshbs.jpg', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id47.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id47.JPG');
INSERT INTO `questions` VALUES ('48', '/1/1/1/1//1//2/2/2/2/3//3/3/3/34/44/', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id48.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id48.JPG');
INSERT INTO `questions` VALUES ('49', 'wwww.baidu.com', 'localhost:8111/AutoGenPaperSystem/upload/question/question_id49.JPG', '1', '1', '0', '0', '0', '1', '1', '3', '0', '略', 'localhost:8111/AutoGenPaperSystem/upload/answer/answer_id49.JPG');

-- ----------------------------
-- Table structure for subject
-- ----------------------------
DROP TABLE IF EXISTS `subject`;
CREATE TABLE `subject` (
  `Subject_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Subject_name` varchar(20) COLLATE utf8_bin NOT NULL,
  `Grade_ID` int(11) NOT NULL,
  PRIMARY KEY (`Subject_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of subject
-- ----------------------------
INSERT INTO `subject` VALUES ('1', '语文', '1');
INSERT INTO `subject` VALUES ('2', '数学', '2');
INSERT INTO `subject` VALUES ('3', '英语', '1');
INSERT INTO `subject` VALUES ('4', '物理', '1');
INSERT INTO `subject` VALUES ('5', '化学', '3');
INSERT INTO `subject` VALUES ('6', '生物', '3');
INSERT INTO `subject` VALUES ('7', '科学', '2');
INSERT INTO `subject` VALUES ('8', '政治', '1');
INSERT INTO `subject` VALUES ('9', '历史', '3');

-- ----------------------------
-- Table structure for types
-- ----------------------------
DROP TABLE IF EXISTS `types`;
CREATE TABLE `types` (
  `Type_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Type_name` varchar(20) COLLATE utf8_bin NOT NULL,
  `Subject_ID` int(11) NOT NULL,
  PRIMARY KEY (`Type_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of types
-- ----------------------------
INSERT INTO `types` VALUES ('1', '单选题', '1');
INSERT INTO `types` VALUES ('2', '现代文阅读', '1');
INSERT INTO `types` VALUES ('3', '文言文阅读', '1');
INSERT INTO `types` VALUES ('4', '默写', '1');
INSERT INTO `types` VALUES ('5', '诗歌鉴赏', '1');
INSERT INTO `types` VALUES ('6', '语言表达', '1');
INSERT INTO `types` VALUES ('7', '名著导读', '1');
INSERT INTO `types` VALUES ('8', '作文', '1');
INSERT INTO `types` VALUES ('10', '集合与常用逻辑用语', '2');
INSERT INTO `types` VALUES ('11', '函数与导数', '2');
INSERT INTO `types` VALUES ('12', '三角函数', '2');
INSERT INTO `types` VALUES ('13', '词汇', '3');
INSERT INTO `types` VALUES ('14', '阅读理解', '3');
INSERT INTO `types` VALUES ('15', '完形填空', '3');
INSERT INTO `types` VALUES ('16', '机械能', '4');
INSERT INTO `types` VALUES ('17', '电场', '4');
INSERT INTO `types` VALUES ('18', '电路', '4');
INSERT INTO `types` VALUES ('19', '解答题', '8');
INSERT INTO `types` VALUES ('20', '计算题', '2');
