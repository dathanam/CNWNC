CREATE DATABASE  IF NOT EXISTS `tttt` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tttt`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: tttt
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `benh`
--

DROP TABLE IF EXISTS `benh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `benh` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `doituong` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `nguyennhan` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `trieuchung` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `phongngua` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `benh`
--

LOCK TABLES `benh` WRITE;
/*!40000 ALTER TABLE `benh` DISABLE KEYS */;
INSERT INTO `benh` VALUES (1,'Cúm A','Mọi đối tượng','chủng virus cúm A phổ biến như A/H1N1, A/H3N2, A/H5N1, A/H7N9 gây nên','li bì, mệt mỏi, kém ăn, bỏ ăn, nôn trớ, chân tay lạnh; Co giật; Khó thở, thở gấp, đờm có lẫn máu,… dẫn đến viêm phổi, thiếu oxy và thậm chí là tử vong, sốt, triệu chứng viêm long đường hô hấp; Sốt cao','Vệ sinh cá nhân cẩn thận: rửa tay thường xuyên, đeo khẩu trang khi ra khỏi nhà. Trong mùa dịch, cần tránh tập trung nơi đông người. Khi xuất hiện các triệu chứng nghi ngờ cúm như sốt, ho, sổ mũi,… nên đến các cơ sở y tế để được chẩn đoán và xác định bệnh. Vệ sinh nơi ở, nơi làm việc. Tăng cường sức đề kháng bằng cách tập thể dục, chế độ sinh hoạt, ăn uống hợp lý.Tiêm vắc xin phòng cúm đầy đủ, đúng lịch. '),(2,'Cúm B','Người ','do virus Influenza gây ra','Ho, đau hoặc ngứa rát cổ họng\nViêm họng\nChảy nước mũi\nHắt hơi liên tục\nSốt vừa đến sốt cao (trên 39oC)\nỚn lạnh toàn thân\nMệt mỏi, chân tay không có lực\nHoa mắt, đau đầu\nĐau nhức cơ, đau khi vận động\nBuồn nôn và nôn\nĐau bụng, tiêu chảy\nChán ăn, khô miệng','Uống thuốc hạ sốt giảm đau, hạ sốt không cần kê đơn: Ibuprofen (Advil) (1) hoặc Acetaminophen (Tylenol) (2), để làm giảm triệu chứng.\nNghỉ ngơi nhiều hơn, giữ không gian sống sạch sẽ, thoáng mát.\nUống nhiều nước, chia nhỏ các bữa ăn trong ngày.\nBổ sung các loại khoáng chất, vitamin giúp tăng đề kháng, tăng miễn dịch và ngăn ngừa biến chứng do virus.\nTiêm vắc xin phòng cúm để bảo vệ cơ thể'),(3,'TAY CHÂN MIỆNG','Trẻ nhỏ dưới 5 tuổi','Nhóm virus đường ruột, điển hình là virus Coxsackievirus A16 (nhóm A16) và Enterovirus 71 (EV71)','sốt, đau họng, tổn thương niêm mạc miệng và da chủ yếu ở dạng phỏng nước xuất hiện tập trung ở lòng bàn tay, lòng bàn chân và bên trong miệng của trẻ, đầu gối và mông.\nsốt nhẹ, mệt mỏi, đau họng, biếng ăn, tiêu chảy vài lần trong ngày.\nLoét miệng: vết loét đỏ hay phỏng nước đường kính 2-3mm ở niêm mạc miệng, lợi, lưỡi, gây đau miệng, bỏ ăn, bỏ bú,…\nPhát ban dạng phỏng nước: đặc điểm này biểu hiện rõ nhất ở trẻ sơ sinh và trẻ em. Ban đầu, nốt ban hồng có đường kính vài milimet, nổi trên bề mặt da ở lòng bàn tay, lòng bàn chân, miệng, mông và trở thành bóng nước. Bóng nước chứa đầy chất dịch và có thể vỡ ra khiến trẻ rất đau đớn. Chúng có thể để lại vết thâm, tuy nhiên rất hiếm khi loét hay bội nhiễm.\nTrẻ có thể sốt nhẹ, nôn.\nNếu trẻ sốt cao và nôn nhiều dễ có nguy cơ biến chứng. Biến chứng thần kinh, tim mạch, hô hấp thường xuất hiện sớm từ ngày 2-5 của bệnh.','Giữ vệ sinh cá nhân\nGiữ vệ sinh ăn uống\nLàm sạch đồ chơi, nơi sinh hoạt\nTheo dõi và phát hiện sớm\nCách ly và điều trị kịp thời khi mắc bệnh'),(4,'Thủy đậu','trẻ em trong độ tuổi từ 2 – 7 tuổi.','virus thuộc họ Herpesviridae, có tên khoa học là Varicella Zoster (VZV)','người bệnh có thể có biểu hiện sốt, đau đầu, đau cơ, cơ thể người bệnh sẽ xuất hiện những “nốt rạ”. Đây là những nốt tròn nhỏ xuất hiện nhanh trong vòng 12-24 giờ, các nốt này sẽ tiến triển thành những mụn nước, bóng nước. Nốt rạ có thể mọc khắp toàn thân hay mọc rải rác trên cơ thể, số lượng trung bình khoảng 100-500 nốt. Trong trường hợp bình thường những mụn nước này khô đi, trở thành vảy và tự khỏi hoàn toàn trong 4-5 ngày. Ở trẻ em, thủy đậu thường kéo dài khoảng 5-10 ngày','Cách ly người bị nhiễm bệnh với những người xung quanh từ 7-10 ngày kể từ ngày phát bệnh, tốt nhất nên để người bệnh ở trong phòng riêng, đặc biệt không tới những chỗ đông người để hạn chế lây lan diện rộng.\nTrẻ em bị thủy đậu không được đến trường hoặc nhà trẻ, phải luôn cắt tỉa móng tay trẻ gọn gàng. Đeo bao tay cho trẻ sơ sinh và trẻ mới biết đi nhằm hạn chế bé cào/gãi không kiểm soát.\nKhông dùng chung đồ dùng cá nhân với người bệnh như: khăn mặt, cốc chén, quần áo…\nVệ sinh thân thể cho người bệnh hàng ngày, không nên kiêng nước, kiêng gió theo kinh nghiệm dân gian. Nên tắm bằng nước nóng và không sử dụng các loại xà phòng, sữa tắm có chứa hóa chất tẩy rửa mạnh để người bệnh nhanh khỏi bệnh, hạn chế lây lan bệnh.\nRửa tay bằng xà phòng hoặc dung dịch sát khuẩn, vệ sinh mũi họng bằng nước muối sinh lý khi có tiếp xúc gần với người bệnh.\nSử dụng thuốc điều trị là xanh Methylen bôi ngoài da. Bên cạnh đó, người bệnh không tự ý sử dụng thuốc kháng sinh, thuốc kháng virus khi chưa có chỉ định của bác sĩ chuyên khoa. Ngoài ra, người bệnh nên sử dụng thuốc hạ sốt khi có biểu hiện sốt cao trên 38.5 độ C và tránh dùng aspirin vì nó có thể gây ra hội chứng Reye.\nĐể tránh lây nhiễm, người bệnh không tiếp xúc trực tiếp với nốt phỏng, tránh làm vỡ vì có thể gây bội nhiễm và thành sẹo.\nĐồng thời, đảm bảo chế độ dinh dưỡng khoa học, uống nhiều nước lọc, ăn rau xanh, hoa quả tươi… và chế độ sinh hoạt, nghỉ ngơi hợp lý để giúp cơ thể tăng cường sức đề kháng để chống lại virus.'),(5,'SARS COV 2','Mọi đối tượng','Virus Sars Cov 2','Dấu hiệu giống bệnh cảm thông thường.\nViêm họng nhẹ, không sốt, không mệt mỏi.\nĂn uống và hoạt động bình thường.\nCổ họng bắt đầu đau nhẹ, người lờ đờ.\nBắt đầu khan tiếng.\nNhiệt độ cơ thể tăng nhẹ.\nĐau đầu nhẹ, tiêu chảy nhẹ.\nBắt đầu chán ăn.\nĐau họng nhiều hơn, khan tiếng nhiều hơn.\nNhiệt độ cơ thể tăng nhẹ\nCơ thể mệt mỏi, đau nhức các khớp xương.','Không đi ra ngoài khi không thật sự cần thiết, không tập trung quá 2 người tại nơi công cộng.\nLuôn đeo khẩu trang khi đi ra ngoài kể cả khi làm việc; luôn đứng cách xa người khác 2 mét.\nLuôn rửa tay bằng xà phòng dưới vòi nước chảy hoặc bằng dung dịch sát khuẩn nhất là sau khi sờ tay vào bất cứ đồ vật nào và sau khi gặp, nói chuyện với người khác trước khi về nhà.\nKhông đưa tay lên mắt, mũi, miệng. Về đến nhà phải thay quần áo và vệ sinh sạch sẽ.\nThường xuyên súc miệng bằng nước muối hoặc nước súc miệng; giữ ấm vùng ngực cổ, uống nước ấm. Thay quần áo khi về nhà và quần áo thay ra cần được ngâm với xà phòng.\nĂn uống đủ chất, ăn chín, uống chín, tập luyện thể thao phù hợp, sinh hoạt lành mạnh. Thường xuyên vệ sinh, giữ thông thoáng nhà cửa, lau rửa các bề mặt hay tiếp xúc.\nNếu cách ly thì phải ở nhà, hạn chế gặp người trong nhà, thực hiện theo các hướng dẫn cách ly của cơ quan y tế.\nKhông nên đến cơ sở y tế nếu không phải cấp cứu. Hãy hỏi cán bộ y tế bằng hotline hoặc qua mạng trước khi muốn đi khám bệnh.\nKhai báo y tế'),(6,'Các bệnh phế cầu','trẻ em và người lớn','do phế cầu khuẩn Streptococcus pneumoniae (40-50%), vi khuẩn Haemophilus influenzae (30-40%)…','Sốt cao từ 30 – 40 độ C, quấy khóc, bỏ bú, kén ăn, nôn trớ và trong một số trường hợp bệnh có thể gây co giật;\nĐau tai;\nĐi ngoài nhiều lần, phân lỏng, triệu chứng xuất hiện gần như đồng thời với sốt.','Vệ sinh tai, mũi.\ntiêm vắc xin phòng các bệnh do phế cầu khuẩn Synflorix (Bỉ) dành cho trẻ từ 6 tuần tuổi đến 5 tuổi; vắc xin Prevenar 13 (Bỉ) dành cho trẻ từ 6 tuần tuổi và người lớn.');
/*!40000 ALTER TABLE `benh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietkho`
--

DROP TABLE IF EXISTS `chitietkho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietkho` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soluong` int DEFAULT NULL,
  `idvacxin` int DEFAULT NULL,
  `idtrungtam` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idvacxin` (`idvacxin`),
  KEY `idtrungtam` (`idtrungtam`),
  CONSTRAINT `chitietkho_ibfk_1` FOREIGN KEY (`idvacxin`) REFERENCES `vacxin` (`id`),
  CONSTRAINT `chitietkho_ibfk_2` FOREIGN KEY (`idtrungtam`) REFERENCES `trungtam` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietkho`
--

LOCK TABLES `chitietkho` WRITE;
/*!40000 ALTER TABLE `chitietkho` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitietkho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietphieunhap`
--

DROP TABLE IF EXISTS `chitietphieunhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietphieunhap` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soluong` int NOT NULL,
  `idphieunhap` int NOT NULL,
  `idvacxin` int NOT NULL,
  `thanhtien` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietphieunhap`
--

LOCK TABLES `chitietphieunhap` WRITE;
/*!40000 ALTER TABLE `chitietphieunhap` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitietphieunhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietphieuxuat`
--

DROP TABLE IF EXISTS `chitietphieuxuat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietphieuxuat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soluong` int NOT NULL,
  `idphieuxuat` int NOT NULL,
  `idvacxin` int NOT NULL,
  `thanhtien` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietphieuxuat`
--

LOCK TABLES `chitietphieuxuat` WRITE;
/*!40000 ALTER TABLE `chitietphieuxuat` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitietphieuxuat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dangkytiem`
--

DROP TABLE IF EXISTS `dangkytiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dangkytiem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `sdt` varchar(15) DEFAULT NULL,
  `ngaytiem` date DEFAULT NULL,
  `idbenh` int DEFAULT NULL,
  `idgoi` int DEFAULT NULL,
  `idtrungtam` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dangkytiem`
--

LOCK TABLES `dangkytiem` WRITE;
/*!40000 ALTER TABLE `dangkytiem` DISABLE KEYS */;
/*!40000 ALTER TABLE `dangkytiem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dieutri`
--

DROP TABLE IF EXISTS `dieutri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dieutri` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ghichu` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `idvacxin` int DEFAULT NULL,
  `idbenh` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dieutri`
--

LOCK TABLES `dieutri` WRITE;
/*!40000 ALTER TABLE `dieutri` DISABLE KEYS */;
INSERT INTO `dieutri` VALUES (1,'Cúm A Vaxigrip',4,1),(2,'Cúm A ',5,1),(3,'Cúm A ',6,1),(4,'Cúm B',4,2),(5,'Cúm B',5,2),(6,'Cúm B',6,2),(7,'Thuỷ đậu',1,4),(8,'Thuỷ đậu',2,4),(9,'Thuỷ đậu',3,4),(10,'Phế cầu',7,6),(11,'Phế cầu',8,6);
/*!40000 ALTER TABLE `dieutri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goi`
--

DROP TABLE IF EXISTS `goi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `goi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `doituong` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tongtien` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goi`
--

LOCK TABLES `goi` WRITE;
/*!40000 ALTER TABLE `goi` DISABLE KEYS */;
/*!40000 ALTER TABLE `goi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goidangky`
--

DROP TABLE IF EXISTS `goidangky`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `goidangky` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idgoi` int DEFAULT NULL,
  `idkhachhang` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goidangky`
--

LOCK TABLES `goidangky` WRITE;
/*!40000 ALTER TABLE `goidangky` DISABLE KEYS */;
/*!40000 ALTER TABLE `goidangky` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goidieutri`
--

DROP TABLE IF EXISTS `goidieutri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `goidieutri` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idgoi` int DEFAULT NULL,
  `iddieutri` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goidieutri`
--

LOCK TABLES `goidieutri` WRITE;
/*!40000 ALTER TABLE `goidieutri` DISABLE KEYS */;
/*!40000 ALTER TABLE `goidieutri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ngay` date DEFAULT NULL,
  `tongtien` float DEFAULT NULL,
  `idnhanvien` int DEFAULT NULL,
  `idtrungtam` int DEFAULT NULL,
  `idkhachhang` int DEFAULT NULL,
  `iddieutri` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadon`
--

LOCK TABLES `hoadon` WRITE;
/*!40000 ALTER TABLE `hoadon` DISABLE KEYS */;
/*!40000 ALTER TABLE `hoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `sdt` varchar(15) DEFAULT NULL,
  `diachi` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `nghenghiep` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sobhyt` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (1,'Nguyễn Duy Anh','1978-02-01','0123654789','Hà Nội','công nhân','21610000486028\n'),(2,'  VŨ HOÀNG TRUNG\n','1988-06-06','013457896','Hà Nội','Công Nhân','21610000483931\n'),(3,'  TRẦN THÁI BẢO\n','1998-09-09','0325698741','Hà Nội','Sinh Viên','21610000486578\n'),(4,'  NGUYỄN ĐÌNH THỊNH\n','1999-09-09','0145879632','Hà Nội','Lập Trình','21610000486268\n'),(5,'  ĐỖ THỊ NGUYỆT\n','1999-01-11','0258963147','Bắc Gang','Sinh Viên','21610000486578\n'),(6,'  HOÀNG THÁI BẢO\n','1999-06-05','0147852369','Bắc Ninh','Sinh viên','21610000487410\n'),(7,'  LƯỜNG ĐÌNH HOÀNG\n','2000-03-09','0365897412','Hà Nội','Học viên','21610000487410\n'),(8,'  BÙI HOÀNG LAM\n','1999-12-01','0145789632','Nam Định','tự do','21610000484341\n'),(9,'  DƯƠNG ANH TUẤN\n','2010-03-09','0254136987','Hải Phòng','học sinh','21610000487632\n'),(10,'  ĐỖ THỊ HÀ\n','1998-03-08','0458796321','Hà Nội','Tự do','21610000486161\n');
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhacungcap`
--

DROP TABLE IF EXISTS `nhacungcap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhacungcap` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhacungcap`
--

LOCK TABLES `nhacungcap` WRITE;
/*!40000 ALTER TABLE `nhacungcap` DISABLE KEYS */;
/*!40000 ALTER TABLE `nhacungcap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `id` int NOT NULL AUTO_INCREMENT,
  `checkcode` tinyint NOT NULL,
  `ten` varchar(255) NOT NULL,
  `ngaysinh` datetime NOT NULL,
  `vitri` varchar(255) NOT NULL,
  `bangcap` varchar(255) NOT NULL,
  `luong` int NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `sdt` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `quyen` enum('user','premium','admin') NOT NULL DEFAULT 'user',
  `loginfirst` int NOT NULL,
  `code` varchar(255) NOT NULL,
  `idtrungtam` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES (1,1,'PREMIUM','1999-11-04 00:00:00','Premium','Tiến Sỹ',2000,'Hà Nội','0147852369','admin.vnvc@gmail.com','premium','123456','premium',1,'wwww',1),(2,2,'admin2','1999-12-12 00:00:00','Admin','Thạc sỹ',1000,'Hà Nội','0213546879','thanhdatmta99@gmail.com','admin2','123456','admin',1,'sikcmpo',2),(3,3,'admin3','1999-12-12 00:00:00','Admin','Thạc sỹ',1000,'Hà Nội','0132465798','dankenguyen369@gmail.com','admin3','123456','admin',1,'cmawjcb',3),(4,4,'admin4','1999-12-12 00:00:00','Admin','Thạc sỹ',1000,'Hà Nội','0458712369','ducviet2707@gmail.com','admin4','123456','admin',1,'mbmcjja',4),(5,5,'admin5','1999-12-12 00:00:00','Admin','Thạc sỹ',1000,'Hà Nội','0148759632','thucchu97@gmail.com','admin5','123456','admin',1,'cbvnmdw',5);
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieunhap`
--

DROP TABLE IF EXISTS `phieunhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieunhap` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idnhanvien` int NOT NULL,
  `trangthai` tinyint NOT NULL,
  `ngay` datetime NOT NULL,
  `tongtien` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieunhap`
--

LOCK TABLES `phieunhap` WRITE;
/*!40000 ALTER TABLE `phieunhap` DISABLE KEYS */;
/*!40000 ALTER TABLE `phieunhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieuxuat`
--

DROP TABLE IF EXISTS `phieuxuat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieuxuat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idnhanvien` int NOT NULL,
  `idtrungtam` int NOT NULL,
  `ngay` varchar(255) NOT NULL,
  `tongtien` int NOT NULL,
  `trangthai` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieuxuat`
--

LOCK TABLES `phieuxuat` WRITE;
/*!40000 ALTER TABLE `phieuxuat` DISABLE KEYS */;
/*!40000 ALTER TABLE `phieuxuat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thongtinhoatdong`
--

DROP TABLE IF EXISTS `thongtinhoatdong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thongtinhoatdong` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tieude` text,
  `thoigianbatdau` date DEFAULT NULL,
  `thoigianketthuc` date DEFAULT NULL,
  `idtrungtam` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thongtinhoatdong`
--

LOCK TABLES `thongtinhoatdong` WRITE;
/*!40000 ALTER TABLE `thongtinhoatdong` DISABLE KEYS */;
/*!40000 ALTER TABLE `thongtinhoatdong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trungtam`
--

DROP TABLE IF EXISTS `trungtam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trungtam` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(255) NOT NULL,
  `duongdaynong` varchar(255) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trungtam`
--

LOCK TABLES `trungtam` WRITE;
/*!40000 ALTER TABLE `trungtam` DISABLE KEYS */;
INSERT INTO `trungtam` VALUES (1,'VNVC','0988888898','210 Hoàng Quốc Việt - Bắc Từ Liêm - Hà Nội'),(2,'VNVC ICON Cầu Giấy','0123456789','Tòa nhà Icon 4, Số 3 Cầu Giấy, P.Láng Thượng, Q.Đống Đa, TP.Hà Nội'),(3,'VNVC Hà Đông','0123456789','Tầng 3, tòa nhà NewSkyline, lô CC2 khu đô thị mới Văn Quán - Yên Phúc, Q.Hà Đông, TP.Hà Nội'),(4,'VNVC Mỹ Đình','0124587963','Tầng 2- Tháp R1 tòa nhà Florence, số 28 đường Trần Hữu Dực, P.Cầu Diễn, Q.Nam Từ Liêm, TP.Hà Nội'),(5,'VNVC Trường Chinh','028 7300 6595','180 Trường Chinh, P.Khương Thượng, Q.Đống Đa, TP.Hà Nội');
/*!40000 ALTER TABLE `trungtam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacxin`
--

DROP TABLE IF EXISTS `vacxin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacxin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soluong` int NOT NULL,
  `ten` varchar(255) NOT NULL,
  `ngaysanxuat` datetime NOT NULL,
  `hansudung` datetime NOT NULL,
  `doituongsudung` varchar(255) NOT NULL,
  `solo` varchar(255) NOT NULL,
  `baoquan` varchar(255) NOT NULL,
  `dongia` float NOT NULL,
  `gianhap` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacxin`
--

LOCK TABLES `vacxin` WRITE;
/*!40000 ALTER TABLE `vacxin` DISABLE KEYS */;
INSERT INTO `vacxin` VALUES (1,1000,'Thuỷ đậu VARIVAX (MỸ)','2021-01-01 00:00:00','2024-01-01 00:00:00','Trẻ em và người lớn','VARI21','nhiệt độ từ 2-8ºC',915000,800000),(2,1000,'Thuỷ đậu Varicella (Hàn Quốc)','2021-01-01 00:00:00','2024-01-01 00:00:00','Trẻ em và người lớn','VARICELLA21','Bảo quản ở 2-8ºC.\nTránh ánh sáng trực tiếp.',700000,500000),(3,1000,'Thuỷ đậu VARILRIX (BỈ)','2021-01-01 00:00:00','2024-01-01 00:00:00','Trẻ em và người lớn','VARILRIX21','Bảo quản ở 2-8ºC.\nTránh ánh sáng trực tiếp.',945000,850000),(4,1000,'Cúm Vaxigrip Tetra 0.5ml (Pháp)','2021-01-01 00:00:00','2024-01-01 00:00:00','Trẻ em và người lớn','Vaxigrip21','nhiệt độ 2-8oC nhưng không để đông băng và tránh ánh sáng',356000,300000),(5,1000,'Cúm INFLUVAC 0.5ML (HÀ LAN)','2021-01-01 00:00:00','2024-01-01 00:00:00','Trẻ em và người lớn','INFLUVAC21','tại 2°C đến 8°C (trong tủ lạnh).\nKhông được đông băng.\nBảo quản trong bao bì gốc. Tránh ánh sáng.',348000,320000),(6,1000,'Cúm IVACFLU-S 0,5ML (VIỆT NAM) ','2021-01-01 00:00:00','2021-01-01 00:00:00','Người lớn','IVACFLU-S21','bảo quản vắc xin từ +2oC đến +8oC, tránh đông băng. Bảo quản vắc xin nguyên trong hộp để tránh ánh sáng.',190000,80000),(7,1000,'Phế cầu SYNFLORIX (BỈ)','2021-01-01 00:00:00','2024-01-01 00:00:00','trẻ nhỏ từ 6 tuần đến 5 tuổi','SYNFLORIX21','nhiệt độ từ 2 độ C – 8 độ C, không được để đông băng',1045000,900000),(8,1000,'Phế cầu PREVENAR 13 (BỈ)','2021-01-01 00:00:00','2024-01-01 00:00:00','trẻ em và người lớn','PREVENAR21','nhiệt độ lạnh (từ 2 – 8oC). Không được đóng băng.',1290000,1100000),(9,1000000,'covid-AstraZeneca','2021-01-01 00:00:00','2024-01-01 00:00:00','Người từ 18 tuổi trở lên','AZD21','nhiệt độ lạnh (từ 2 – 8oC). Không được đóng băng.',0,0);
/*!40000 ALTER TABLE `vacxin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tttt'
--

--
-- Dumping routines for database 'tttt'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-17  0:35:32
