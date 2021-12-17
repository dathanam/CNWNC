import React, { useEffect, useState } from 'react';
import './PhieuNhap.css'
import api from '../../API';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@material-ui/core/TextField';
import '../PhieuNhap/PhieuNhap.css';

function PhieuNhap() {
    const moment = require('moment')
    // get List vacxin
    const [listVacxin, setListVacxin] = useState([{}]);
    const getArrListVacxin = async () => {
        const response = await api.getVacxin()
        if (response && response.data) {
            setListVacxin(response.data)
        }
    }

    //list Nhân Viên
    const [listNhanVien, setListNhanVien] = useState([]);
    const getArrNV = async () => {
        const response = await api.getNhanVien()
        if (response && response.data) {
            setListNhanVien(response.data)
        }
    }

    const [listPhieuNhap, setListPhieuNhap] = useState([]);
    const getArr = async () => {
        const response = await api.getPhieuNhap()
        if (response && response.data) {
            setListPhieuNhap(response.data)
        }
    }

    useEffect(() => {
        getArrListVacxin();
        getArr();
        getArrNV();
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

    // Create phiếu nhập
    const [newData, setNewData] = useState({
        ngay: "",
        idnhanvien: ""
    })
    function submitCreatePhieuNhap() {
        if(newData != null) {
            api.createPhieuNhap(newData)
                .then((res) => {
                    if (res.data.statusCode === 200) {
                        if (res.data.statusCode === 200) {
                            alert("Tạo thành công");
                            window.location.reload()
                        } else {
                            alert("Kiểm tra lại")
                        }
                    }
                })
                .catch((err) => {
                })
        }
    }
    useEffect(() => {
        submitCreatePhieuNhap();
    }, [newData.ngay]);
    //end create

    //delete
    const [deletePhieuNhap, setDeletePhieuNhap] = useState([{}]);
    const [deleteModel, setDeleteModel] = React.useState(false);
    const deleteOpen = () => setDeleteModel(true);
    const deleteClose = () => setDeleteModel(false);
    function submitDelete() {
        api.deletePhieuNhap(deletePhieuNhap.id)
    }
    //end delete

    //add detail
    const [details, setdetails] = React.useState(false);
    const detailsOpen = () => setdetails(true);
    const detailsClose = () => setdetails(false);

    const [addDetails, setAddDetails] = React.useState(false);
    const addDetailsOpen = () => setAddDetails(true);
    const addDetailsClose = () => setAddDetails(false);

    const [soLuong, setSoLuong] = React.useState(false);
    const soLuongOpen = () => setSoLuong(true);
    const soLuongClose = () => setSoLuong(false);

    const [idPhieuNhap, setIdPhieuNhap] = useState({
        id: "",
    });

    const [listDetail, setListDetail] = useState([{}]);
    const [detail, setDetail] = useState({
        soluong: "",
        idvacxin: "",
    });
    const handleAddDetail = (event) => {
        const newdata = { ...detail };
        newdata[event.target.id] = event.target.value;
        setDetail(newdata);
    };

    function submitCreateDetail() {
        listDetail.map(item => {
            var newdata = { ...item, idphieunhap: idPhieuNhap.id }
            api.createChiTietPhieuNhap(newdata)
        })
        api.updatePhieuNhap(idPhieuNhap.id)
        setDetail({
            soluong: "",
            idvacxin: "",
        })
        setListDetail([{
            soluong: "",
            idvacxin: "",
        }])
    }

    // View Detail
    //getChiTietPhieuNhap
    const [listCTPN, setListCTPN] = useState([]);
    const getDetail = async () => {
        const response = await api.getDetail(idPhieuNhap.id)
        if (response && response.data) {
            setListCTPN(response.data)
        }
    }
    useEffect(() => {
        getDetail()
    }, [idPhieuNhap.id]);

    const [viewDetail, setViewDetail] = React.useState(false);
    const viewDetailOpen = () => setViewDetail(true);
    const viewDetailClose = () => setViewDetail(false);
    //End view detail

    return (
        <div className="table_admin">
            <button type='submit' className="btn btn-primary" onClick={() => setNewData({
                ngay: moment(Date.now()).utc().format('DD/MM/YYYY'),
                idnhanvien: localStorage.getItem("idNV")
            })}>Tạo mới</button>
            <table id="customers">
                <tr>
                    <th>id</th>
                    <th>Ngày</th>
                    <th>Nhân viên</th>
                    <th>Tổng tiền</th>
                    <th>chức năng</th>
                </tr>
                {
                    listPhieuNhap.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{moment(item.ngay).utc().format('DD/MM/YYYY')}</td>
                                <td>{listNhanVien.map(icon => icon.id === item.idnhanvien ? icon.ten : "")}</td>
                                <td>{item.trangthai === false ? "Đang tạo" : item.tongtien}</td>
                                <td>
                                    <button onClick={() => {
                                        setIdPhieuNhap({ id: item.id })
                                    }}>
                                        <i onClick={viewDetailOpen} className="fas fa-eye"></i>
                                    </button>
                                    <button onClick={() => {
                                        setIdPhieuNhap({ id: item.id })
                                    }}>
                                        <i onClick={addDetailsOpen} className="fas fa-plus"></i>
                                    </button>
                                    <button onClick={() => { setDeletePhieuNhap(item) }}>
                                        <i onClick={deleteOpen} className="fas fa-trash-alt"></i>
                                    </button>

                                </td>
                            </tr>
                        )
                    })
                }
            </table>

            {/*detail */}
            <Modal
                open={details}
                onClose={detailsClose}
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
                                    <th>đối tượng sử dụng</th>
                                    <th>Số Lượng</th>
                                </tr>
                                {
                                    listDetail.map((item) => {
                                        return (
                                            <tr>
                                                <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.ten : "")}</td>
                                                <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.solo : "")}</td>
                                                <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.dongia : "")}</td>
                                                <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.doituongsudung : "")}</td>
                                                <td>{item.soluong}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </Typography>
                    <div className="model_footer">
                        <button className="btn_left btn-primary" type="button" onClick={
                            addDetailsOpen
                        }>Thêm</button>
                        <button className="btn_right btn-success" onClick={() => {
                            submitCreateDetail()
                            detailsClose()
                            window.location.reload()
                        }} >Xác nhận</button>
                    </div>
                </Box>
            </Modal>
            {/*Detail */}

            {/* Add Detail */}
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
                                listDetail.push(detail)
                                addDetailsClose()
                                soLuongClose()
                                detailsOpen()
                            }}>
                                Xác nhận
                            </button>
                        </div>
                    </Typography>
                </Box>
            </Modal>
            {/* End Add Detail */}

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
                                listCTPN.map((item) => {
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
                        Bạn có chắc chắn muốn xóa {deletePhieuNhap.id}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={submitDelete}>
                            <button className="btn_submit">Xác nhận</button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div >
    );
}

export default PhieuNhap;