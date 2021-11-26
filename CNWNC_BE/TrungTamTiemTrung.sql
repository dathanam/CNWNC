create database tttt;

CREATE TABLE tttt.nhacungcap
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ten nvarchar (50) ,
diachi nvarchar (100)
);

CREATE TABLE tttt.nhanvien 
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ten nvarchar (50) ,
ngaysinh date,
vitri nvarchar (50) ,
bangcap nvarchar (50) ,
luong float,
diachi nvarchar (50) ,
sdt varchar (15),
email varchar(200),
username varchar (50),
password varchar (50),
quyen varchar(20),
code varchar(10),
checkcode boolean,
loginfirst boolean
);

CREATE TABLE tttt.vacxin 
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ten nvarchar (50),
soluong int ,
dongia float,
ngaysanxuat date,
hansudung date,
doituongsudung nvarchar (50),
solo varchar (50),
baoquan nvarchar (50)
);

CREATE TABLE tttt.trungtam
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ten nvarchar (50),
duongdaynong varchar (15),
diachi nvarchar (100)
);

CREATE TABLE tttt.goi
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ten nvarchar (50),
doituong nvarchar (50),
tongtien float
);

CREATE TABLE tttt.benh
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ten nvarchar (50),
doituong nvarchar (50),
nguyennhan nvarchar (255),
trieuchung nvarchar (255),
phongngua nvarchar (255)
);

CREATE TABLE tttt.khachhang
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ten nvarchar (50),
ngaysinh date,
sdt varchar (15) ,
diachi nvarchar (100),
nghenghiep nvarchar (255),
sobhyt varchar (50)
);

CREATE TABLE tttt.phieunhap
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ngay date,
tongtien float,
idnhanvien int,
idnhacungcap int,
FOREIGN KEY(idnhanvien) REFERENCES nhanvien(id),
FOREIGN KEY(idnhacungcap) REFERENCES nhacungcap(id)
);

CREATE TABLE tttt.chitietphieunhap
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
soluong int(11),
thanhtien float,
idphieunhap int,
idvacxin int,
FOREIGN KEY (idphieunhap) REFERENCES phieunhap(id),
FOREIGN KEY (idvacxin) REFERENCES vacxin(id)
);

CREATE TABLE tttt.phieuxuat
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ngay date,
tongtien FLOAT,
idnhanvien int,
idtrungtam int,
FOREIGN KEY (idnhanvien) REFERENCES nhanvien(id),
FOREIGN KEY (idtrungtam) REFERENCES trungtam(id)
);

CREATE TABLE tttt.chitietphieuxuat
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
soluong int(11),
thanhtien float,
idphieuxuat int,
idvacxin int,
FOREIGN KEY (idphieuxuat) REFERENCES phieuxuat(id),
FOREIGN KEY (idvacxin) REFERENCES vacxin(id)
);


CREATE TABLE tttt.kho 
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ten nvarchar (50),
idtrungtam int,
FOREIGN KEY (idtrungtam) REFERENCES trungtam(id)
);

CREATE TABLE tttt.chitietkho
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
soluong int,
idvacxin int,
idkho int,
FOREIGN KEY (idvacxin) REFERENCES vacxin(id),
FOREIGN KEY (idkho) REFERENCES kho(id)
);

CREATE TABLE tttt.xuatkho
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ngay date,
idnhanvien int,
idkho int,
FOREIGN KEY (idnhanvien) REFERENCES nhanvien(id),
FOREIGN KEY (idkho) REFERENCES kho(id)
);

CREATE TABLE tttt.chitietxuatkho
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
soluong int,
idchitietkho int,
idxuatkho int,
FOREIGN KEY (idchitietkho) REFERENCES chitietkho(id),
FOREIGN KEY (idxuatkho) REFERENCES xuatkho(id)
);

CREATE TABLE tttt.thongtinhoatdong
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
tieude text,
thoigianbatdau date,
thoigianketthuc date,
idtrungtam int,
FOREIGN KEY (idtrungtam) REFERENCES trungtam(id)
);

CREATE TABLE tttt.dieutri
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ghichu nvarchar (255),
idvacxin int,
idbenh int,
FOREIGN KEY (idvacxin) REFERENCES vacxin(id),
FOREIGN KEY (idbenh) REFERENCES benh(id)
);

CREATE TABLE tttt.goidieutri
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
idgoi int,
iddieutri int,
FOREIGN KEY (idgoi) REFERENCES goi(id),
FOREIGN KEY (iddieutri) REFERENCES dieutri(id)
);

CREATE  TABLE tttt.goidangky 
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
idgoi int,
idkhachhang int,
FOREIGN KEY (idgoi) REFERENCES goi(id),
FOREIGN KEY (idkhachhang) REFERENCES khachhang(id)
);

CREATE TABLE tttt.dangkytiem
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ten nvarchar(200),
ngaysinh date,
sdt varchar(15),
ngaytiem date,
idbenh int,
idgoi int,
idtrungtam int,
FOREIGN KEY (idbenh) REFERENCES benh(id),
FOREIGN KEY (idgoi) REFERENCES goi(id),
FOREIGN KEY (idtrungtam) REFERENCES trungtam(id)
);


CREATE TABLE tttt.hoadon
(
id int(11) PRIMARY KEY AUTO_INCREMENT,
ngay date,
tongtien float,
idnhanvien int,
idtrungtam int,
idkhachhang int,
iddieutri int,
FOREIGN KEY (idnhanvien) REFERENCES nhanvien(id),
FOREIGN KEY (idtrungtam) REFERENCES trungtam(id),
FOREIGN KEY (idkhachhang) REFERENCES khachhang(id),
FOREIGN KEY (iddieutri) REFERENCES dieutri(id)
);