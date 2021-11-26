import React, { useEffect, useState } from 'react';
import '../NhanVien/Nhanvien.css';
import { useHistory } from "react-router-dom";
import api from '../../API';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@material-ui/core/TextField';

function Nhanvien() {
    const moment = require('moment')

    const [listNhanVien, setListNhanvien] = useState([]);
    const getArr = async () => {
        const response = await api.getNhanVien()
        if (response && response.data) {
            setListNhanvien(response.data)
        }
    }
    useEffect(() => {
        getArr();
    }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    //create
    const [create, setCreate] = React.useState(false);
    const CreateOpen = () => setCreate(true);
    const CreateClose = () => setCreate(false);
    const [nhanVienCreate, setnhanVienCreate] = useState([{
        ten: "",
        email: "",
        ngaysinh: "",
        vitri: "",
        bangcap: "",
        luong: "",
        diachi: "",
        sdt: "",
        username: "",
        password: "",
    }]);
    function handleCreateNhanVien(event) {
        const newdata = { ...nhanVienCreate };
        newdata[event.target.id] = event.target.value;
        setnhanVienCreate(newdata);
    }
    function submitCreateNhanVien(e) {
        e.preventDefault();
        api.createNhanVien(nhanVienCreate)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    alert("Mật khẩu đã được gửi tới " + nhanVienCreate.email);
                    setnhanVienCreate({
                        ten: "",
                        email: "",
                        ngaysinh: "",
                        vitri: "",
                        bangcap: "",
                        luong: "",
                        diachi: "",
                        sdt: "",
                        username: "",
                        password: "",
                    })
                    window.location.reload()
                } else {
                    alert("Tài khoản đã tồn tại")
                    setnhanVienCreate({
                        ten: "",
                        email: "",
                        ngaysinh: "",
                        vitri: "",
                        bangcap: "",
                        luong: "",
                        diachi: "",
                        sdt: "",
                        username: "",
                        password: "",
                    })
                }
            })
            .catch((err) => {
                alert("Error!")
                setnhanVienCreate({
                    ten: "",
                    email: "",
                    ngaysinh: "",
                    vitri: "",
                    bangcap: "",
                    luong: "",
                    diachi: "",
                    sdt: "",
                    username: "",
                    password: "",
                })
            })
    }
    //end create

    //edit
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [nhanVienEdit, setnhanVienEdit] = useState([{}]);
    function handleEditNhanVien(event) {
        const newdata = { ...nhanVienEdit };
        newdata[event.target.id] = event.target.value;
        setnhanVienEdit(newdata);
    }
    function submitEditNhanVien(e) {
        e.preventDefault();
        api.editNhanVien(nhanVienEdit.id, nhanVienEdit)
            .then((res) => {
                window.location.reload()
                setnhanVienEdit({
                    bangcap: "",
                    luong: "",
                    vitri: ""
                })
            })
            .catch(err => {
                alert("Error")
            })
    }
    //end edit

    //delete
    const [deleteNhanVien, setDeleteNhanVien] = useState([{}]);
    const [deleteModel, setDeleteModel] = React.useState(false);
    const deleteOpen = () => setDeleteModel(true);
    const deleteClose = () => setDeleteModel(false);
    function submitDelete() {
        api.deleteNhanVien(deleteNhanVien.id)
    }
    //end delete

    return (
        <div className="table_admin">
            <button className="btn_add" onClick={CreateOpen}>Tạo mới</button>
            <table id="customers">
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Ngày sinh</th>
                    <th>Vị trí</th>
                    <th>Bằng cấp</th>
                    <th>Quyền</th>
                    <th>Địa chỉ</th>
                    <th>Chức năng</th>
                </tr>
                {
                    listNhanVien.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.ten}</td>
                                <td>{moment(item.ngaysinh).utc().format('DD/MM/YYYY')}</td>
                                <td>{item.vitri}</td>
                                <td>{item.bangcap}</td>
                                <td>{item.quyen}</td>
                                <td>{item.diachi}</td>
                                <td>
                                    <button onClick={() => {
                                        setnhanVienEdit(item)
                                    }}>
                                        <i onClick={handleOpen} className="fas fa-edit"></i>
                                    </button>
                                    <button onClick={() => { setDeleteNhanVien(item) }}>
                                        <i onClick={deleteOpen} className="fas fa-trash-alt"></i>
                                    </button>

                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Sửa nhân viên
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={(e) => submitEditNhanVien(e)}>
                            <TextField label="Bằng cấp" variant="outlined" onChange={handleEditNhanVien} id="bangcap" value={nhanVienEdit.bangcap} />
                            <TextField label="lương" variant="outlined" onChange={handleEditNhanVien} id="luong" value={nhanVienEdit.luong} />
                            <TextField label="Vị trí" variant="outlined" onChange={handleEditNhanVien} id="vitri" value={nhanVienEdit.vitri} />

                            <br />
                            <button className="btn_submit">Xác nhận</button>
                        </form>

                    </Typography>
                </Box>
            </Modal>

            <Modal
                open={create}
                onClose={CreateClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Thêm mới nhân viên
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={(e) => submitCreateNhanVien(e)}>
                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="Tên" variant="outlined" onChange={handleCreateNhanVien} id="ten" value={nhanVienCreate.ten} />
                                </div>
                                <div className="col-6">
                                    <TextField label="Email" variant="outlined" onChange={handleCreateNhanVien} id="email" value={nhanVienCreate.email} />
                                </div>
                            </div>

                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="Ngày sinh" variant="outlined" onChange={handleCreateNhanVien} id="ngaysinh" value={nhanVienCreate.ngaysinh} />

                                </div>
                                <div className="col-6">
                                    <TextField label="Vị trí" variant="outlined" onChange={handleCreateNhanVien} id="vitri" value={nhanVienCreate.vitri} />
                                </div>
                            </div>

                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="Bằng cấp" variant="outlined" onChange={handleCreateNhanVien} id="bangcap" value={nhanVienCreate.bangcap} />
                                </div>
                                <div className="col-6">
                                    <TextField label="Lương" variant="outlined" onChange={handleCreateNhanVien} id="luong" value={nhanVienCreate.luong} />
                                </div>
                            </div>

                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="Địa chỉ" variant="outlined" onChange={handleCreateNhanVien} id="diachi" value={nhanVienCreate.diachi} />
                                </div>
                                <div className="col-6">
                                    <TextField label="SĐT" variant="outlined" onChange={handleCreateNhanVien} id="sdt" value={nhanVienCreate.sdt} />
                                </div>
                            </div>

                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="username" variant="outlined" onChange={handleCreateNhanVien} id="username" value={nhanVienCreate.username} />
                                </div>
                                <div className="col-6">
                                    <TextField label="password" type="password" variant="outlined" onChange={handleCreateNhanVien} id="password" value={nhanVienCreate.password} />
                                </div>
                            </div>
                            <br />
                            <button className="btn_submit">Xác nhận</button>
                        </form>

                    </Typography>
                </Box>
            </Modal>

            <Modal
                open={deleteModel}
                onClose={deleteClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Bạn có chắc chắn muốn xóa {deleteNhanVien.ten}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={submitDelete}>
                            <button className="btn_submit">Xác nhận</button>
                        </form>

                    </Typography>
                </Box>
            </Modal>

        </div>
    );
}

export default Nhanvien;