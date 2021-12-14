import React, { useEffect, useState } from 'react';
import './PhieuXuat.css'
import api from '../../API';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@material-ui/core/TextField';

function PhieuXuat() {

    const moment = require('moment')

    const [listPhieuXuat, setListPhieuXuat] = useState([]);
    const getArrListPhieuXuat = async () => {
        const response = await api.getPhieuXuat()
        if (response && response.data) {
            setListPhieuXuat(response.data)
        }
    }

    const [listNhanVien, setListNhanVien] = useState([]);
    const getArrNV = async () => {
        const response = await api.getNhanVien()
        if (response && response.data) {
            setListNhanVien(response.data)
        }
    }

    const [listTrungTam, setListTrungTam] = useState([]);
    const getArrTT = async () => {
        const response = await api.getTrungTam()
        if (response && response.data) {
            setListTrungTam(response.data)
        }
    }

    const [listVacxin, setListVacxin] = useState([]);
    const getArrListVacxin = async () => {
        const response = await api.getVacxin()
        if (response && response.data) {
            setListVacxin(response.data)
        }
    }

    useEffect(() => {
        getArrListPhieuXuat();
        getArrTT();
        getArrListVacxin();
        getArrNV();
    }, []);

    const [create, setCreate] = React.useState(false);
    const createsOpen = () => setCreate(true);
    const createClose = () => setCreate(false);
    const [addDetails, setAddDetails] = React.useState(false);
    const addDetailsOpen = () => setAddDetails(true);
    const addDetailsClose = () => setAddDetails(false);
    const [soLuong, setSoLuong] = React.useState(false);
    const soLuongOpen = () => setSoLuong(true);
    const soLuongClose = () => setSoLuong(false);
    const [viewDetail, setViewDetail] = React.useState(false);
    const viewDetailOpen = () => setViewDetail(true);
    const viewDetailClose = () => setViewDetail(false);
    const [deleteModel, setDeleteModel] = React.useState(false);
    const deleteOpen = () => setDeleteModel(true);
    const deleteClose = () => setDeleteModel(false);

    const [dataCreateDetail, setDataCreateDetail] = useState([])
    const [detail, setDetail] = useState({
        soluong: "",
        idvacxin: "",
        dongia: ""
    });
    const [tongTien, setTongTien] = useState({
        sum: 0
    })

    const [dataCreate, setDataCreate] = useState({
        idnhanvien: localStorage.getItem("idNV"),
        idtrungtam: "",
        ngay: moment(Date.now()).utc().format('DD/MM/YYYY'),
        tongtien: "",
        trangthai: false
    });

    const updateTongTien = async () => {
        const newdata = { ...dataCreate };
        newdata.tongtien = tongTien.sum;
        setDataCreate(newdata)
    }
    useEffect(() => {
        updateTongTien();
    }, [tongTien.sum]);

    function submitCreateDetail(id) {
        dataCreateDetail.map(item => {
            var newdata = { ...item, idphieuxuat: id }
            api.createChiTietPhieuXuat(newdata)
            var newdataSL = { soluong: item.soluong}
            console.log(newdataSL)
            api.updateSoLuong(item.idvacxin, newdataSL)
        })
        setDataCreateDetail([])
    }

    function submitDataCreate() {
        api.createPhieuXuat(dataCreate)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    submitCreateDetail(res.data.newPN.id)
                    setDataCreate({
                        idnhanvien: localStorage.getItem("idNV"),
                        idtrungtam: "",
                        ngay: moment(Date.now()).utc().format('DD/MM/YYYY'),
                        tongtien: "",
                        trangthai: false
                    })
                    window.location.reload()
                } else {
                    alert("Error")
                    setDataCreate({
                        idnhanvien: localStorage.getItem("idNV"),
                        idtrungtam: "",
                        ngay: moment(Date.now()).utc().format('DD/MM/YYYY'),
                        tongtien: "",
                        trangthai: false
                    })
                    setDataCreateDetail([])
                }
            })
            .catch((err) => {
                setDataCreate({
                    idnhanvien: localStorage.getItem("idNV"),
                    idtrungtam: "",
                    ngay: moment(Date.now()).utc().format('DD/MM/YYYY'),
                    tongtien: "",
                    trangthai: false
                })
                setDataCreateDetail([])
            })
    }

    const handleAddDetail = (event) => {
        const newdata = { ...detail };
        newdata[event.target.id] = event.target.value;
        setDetail(newdata);
    };

    function handleCreate(event) {
        const newdata = { ...dataCreate };
        newdata[event.target.name] = event.target.value;
        setDataCreate(newdata);
    }

    const [idPhieuNhap, setIdPhieuNhap] = useState({
        id: "",
    });
    const [listCTPX, setListCTPX] = useState([]);
    const getDetail = async () => {
        const response = await api.getDetailPX(idPhieuNhap.id)
        if (response && response.data) {
            setListCTPX(response.data)
        }
    }
    useEffect(() => {
        getDetail()
    }, [idPhieuNhap.id]);

    const [deletePhieuXuat, setDeletePhieuXuat] = useState({});
    function submitDelete() {
        api.deletePhieuXuat(deletePhieuXuat.id)
    }







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
    const Style_modal_add_detail = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1090,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
    return (
        <div className="table_admin">
            <button className="btn btn-primary" onClick={createsOpen}>Tạo mới</button>
            <table id="customers">
                <tr>
                    <th>id</th>
                    <th>Ngày</th>
                    <th>Nhân viên</th>
                    <th>Cơ sở</th>
                    <th>Trạng thái</th>
                    <th>Tổng tiền</th>
                    <th>#</th>
                </tr>
                {
                    listPhieuXuat.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{moment(item.ngay).utc().format('DD/MM/YYYY')}</td>
                                <td>{listNhanVien.map(icon => icon.id === item.idnhanvien ? icon.ten : "")}</td>
                                <td>{listTrungTam.map(icon => icon.id === item.idtrungtam ? icon.ten : "")}</td>
                                <td>{item.trangthai === false ? "Đang vận chuyển" : "Đã nhận"}</td>
                                <td>{item.tongtien}</td>
                                <td>
                                    <button onClick={() =>setIdPhieuNhap({
                                        id: item.id
                                    })}>
                                        <i onClick={viewDetailOpen} className="fas fa-eye"></i>
                                    </button>
                                    <button onClick={() => setDeletePhieuXuat(item)}>
                                        <i onClick={deleteOpen} className="fas fa-trash-alt"></i>
                                    </button>

                                </td>
                            </tr>
                        )
                    })
                }
            </table>

            {/*Create new Phieu Xuat */}
            <Modal
                open={create}
                onClose={createClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Style_modal_add_detail}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='header_create'>
                            <div className='co_so'>
                                <label for="coso">Cở sở:</label>
                                <select id="coso" name="idtrungtam" onChange={handleCreate}>
                                    <option>Chọn cơ sở</option>
                                    {
                                        listTrungTam.map(item => {
                                            return (
                                                <option value={item.id}>{item.ten} : {item.diachi}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='tong_tien'>
                                <label>Tổng tiền:</label>
                                <h4>{tongTien.sum} vnđ</h4>
                            </div>
                        </div>

                        <button className="btn btn-primary" onClick={addDetailsOpen}>Thêm Sản Phẩm</button>
                        <table id="customers">
                            <tr>
                                <th>tên</th>
                                <th>số lô</th>
                                <th>đơn giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                            {
                                dataCreateDetail.map((item) => {
                                    return (
                                        <tr>
                                            <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.ten : "")}</td>
                                            <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.solo : "")}</td>
                                            <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.dongia : "")}</td>
                                            <td>{item.soluong}</td>
                                            <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.dongia * item.soluong : "")}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </Typography>
                    <div className="model_footer">
                        <button className="btn_right btn-success" onClick={() => {
                            submitDataCreate()
                        }} >Xác nhận</button>
                    </div>
                </Box>
            </Modal>

            {/* Detail */}
            <Modal
                open={addDetails}
                onClose={addDetailsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Style_modal_add_detail}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="changePasswordInputUser">
                            <table id="customers">
                                <tr>
                                    <th>tên</th>
                                    <th>số lô</th>
                                    <th>đơn giá</th>
                                    <th>ngày sản xuất</th>
                                    <th>hạn sử dụng</th>
                                    <th>đối tượng sử dụng</th>
                                    <th>#</th>
                                </tr>
                                {
                                    listVacxin.map((item) => {
                                        return (
                                            <tr>
                                                <td>{item.ten}</td>
                                                <td>{item.solo}</td>
                                                <td>{item.dongia}</td>
                                                <td>{moment(item.ngaysanxuat).utc().format('DD/MM/YYYY')}</td>
                                                <td>{moment(item.hansudung).utc().format('DD/MM/YYYY')}</td>
                                                <td>{item.doituongsudung}</td>
                                                <td>
                                                    <button onClick={() => {
                                                        setDetail({
                                                            soluong: "",
                                                            idvacxin: item.id,
                                                            dongia: item.dongia
                                                        })
                                                    }}>
                                                        <i onClick={soLuongOpen} class="fas fa-plus"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </Typography>
                </Box>
            </Modal>

            <Modal
                open={soLuong}
                onClose={soLuongClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="changePasswordInputUser">
                            <div className="row">
                                <div className="col-12 a">
                                    <TextField label="Số lượng" type="text" variant="outlined" onChange={handleAddDetail} id="soluong" value={detail.soluong} />
                                </div>
                            </div>
                            <br />
                            <button onClick={() => {
                                dataCreateDetail.push(detail)
                                addDetailsClose()
                                soLuongClose()
                                setTongTien({
                                    sum: tongTien.sum + detail.dongia*detail.soluong
                                })
                            }}>
                                Xác nhận
                            </button>
                        </div>
                    </Typography>
                </Box>
            </Modal>

            {/* View Detail */}
            <Modal
                open={viewDetail}
                onClose={viewDetailClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Style_modal_add_detail}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <table id="customers">
                            <tr>
                                <th>Vacxin</th>
                                <th>Lô</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                            {
                                listCTPX.map((item) => {
                                    return (
                                        <tr>
                                            <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.ten : "")}</td>
                                            <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.solo : "")}</td>
                                            <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.dongia : "")}</td>
                                            <td>{item.soluong}</td>
                                            <td>{item.thanhtien}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </Typography>
                </Box>
            </Modal>
            {/* End View Detail */}

            <Modal
                open={deleteModel}
                onClose={deleteClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Bạn có chắc chắn muốn xóa {deletePhieuXuat.id}
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

export default PhieuXuat;