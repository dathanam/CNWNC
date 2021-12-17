import { axios } from './HeaderAPI';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
})

export default {
  //Auth
  login: (data) => axios.post('/auth/login', data),
  signup: (data) => axios.post(`auth/register`, data),
  changePass: (data) => axios.put("/user/auth/changePassword", data),
  checkCode: (data) => axios.put(`/nhanvien/check`, data),

  //employee
  getEmployee: (start) => axios.get("/employee/paginate?page=" + start + "&limit=5"),
  searchEmployee: (data) => axios.get('employee/paginate?page=1&limit=5&nameEmployee=' + data),
  postEmployee: (data) => axios.post('/employee', data),
  putEmployee: (id, data) => axios.put('/employee/' + id, data),
  deleteEmployee: (id) => axios.delete(`employee/` + id),

  //Nhân viên
  getNhanVien: () => axios.get("/nhanvien"),
  editNhanVien: (id, data) => axios.put('/nhanvien/'+ id, data),
  createNhanVien: (data) => axios.post('/nhanvien', data),
  deleteNhanVien: (id) => axios.delete('nhanvien/' + id),
  changePass: (data) => axios.put('/nhanvien/changepass', data),

  //Vacxin
  getVacxin: () => axios.get("/vacxin"),
  createVacxin: (data) => axios.post('/vacxin', data),
  deleteVacxin: (id) => axios.delete('vacxin/' + id),
  updateSoLuong:(id, data) => axios.put('vacxin/' + id, data),

  // Nhà cung cấp
  getNhaCungCap: () => axios.get("/nhacungcap"),
  createNhaCungCap: (data) => axios.post('/nhacungcap', data),
  editNhaCungCap: (id, data) => axios.put('/nhacungcap/'+ id, data),
  deleteNhaCungCap: (id) => axios.delete('nhacungcap/' + id),

  //Phiếu nhập
  getPhieuNhap: () => axios.get("/phieunhap"),
  createPhieuNhap: (data) => axios.post('/phieunhap', data),
  deletePhieuNhap: (id) => axios.delete('/phieunhap/' + id),
  updatePhieuNhap: (id) => axios.put('/phieunhap/'+ id),


  // Chi tiết phiếu nhập
  createChiTietPhieuNhap:(data) => axios.post('/chitietphieunhap', data),
  getDetail: (idPhieuNhap) => axios.get('/chitietphieunhap/'+idPhieuNhap),

  //Phiếu Xuat
  getPhieuXuat: () => axios.get("/phieuxuat"),
  createPhieuXuat: (data) => axios.post('/phieuxuat', data),
  deletePhieuXuat: (id) => axios.delete('/phieuxuat/' + id),
  updatePhieuXuat: (id) => axios.put('/phieuxuat/'+ id),

  // Trung tâm
  getTrungTam: () => axios.get("/trungtam"),

  //Chi tiết phiếu xuất
  createChiTietPhieuXuat:(data) => axios.post('/chitietphieuxuat', data),
  getDetailPX:(idPhieuXuat) => axios.get('/chitietphieuxuat/'+idPhieuXuat),

  // Chi tiet kho
  getChiTietKho:(idtrungtam) => axios.get('/chitietkho/'+idtrungtam),
  createChiTietKho:(data) => axios.post('/chitietkho', data),
}
