import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Layout/Header/Header.jsx';
import Nhanvien from '../Component/NhanVien/NhanVien.jsx';
import Vacxin from '../Component/Vacxin/Vacxin.jsx';
import NhaCungCap from '../Component/NhaCungCap/NhaCungCap.jsx';
import PhieuNhap from '../Component/PhieuNhap/PhieuNhap.jsx';
import PhieuXuat from '../Component/PhieuXuat/PhieuXuat.jsx';

function LayoutAdmin() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/admin" exact component={Nhanvien} />
                    <Route path="/admin/vacxin" component={Vacxin} />
                    <Route path="/admin/nhacungcap" component={NhaCungCap} />
                    <Route path="/admin/phieunhap" component={PhieuNhap} />
                    <Route path="/admin/phieuxuat" component={PhieuXuat} />
                </Switch>
            </Router>
        </div>
    );
}

export default LayoutAdmin;