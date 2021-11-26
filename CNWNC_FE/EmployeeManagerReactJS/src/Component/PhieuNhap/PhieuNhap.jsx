import React, { useEffect, useState } from 'react';
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

    // get Nhan vien
    const [listNhanVien, setListNhanvien] = useState([]);
    const getArrNV = async () => {
        const response = await api.getNhanVien()
        if (response && response.data) {
            setListNhanvien(response.data)
        }
    }
    // get nha cung cap
    const [listNhaCungCap, setListNhaCungCap] = useState([]);
    const getArrNCC = async () => {
        const response = await api.getNhaCungCap()
        if (response && response.data) {
            setListNhaCungCap(response.data)
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
        getArrNCC();
        getArrNV();
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
    const [PhieuNhapCreate, setPhieuNhapCreate] = useState({
        ngay: "",
        idnhanvien: "",
        idnhacungcap: ""
    });

    const handleCreatePhieuNhap = (event) => {
        const newdata = { ...PhieuNhapCreate };
        newdata[event.target.id] = event.target.value;
        setPhieuNhapCreate(newdata);
    };
    function submitCreatePhieuNhap(e) {
        e.preventDefault();
        api.createPhieuNhap(PhieuNhapCreate)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    if (res.data.statusCode === 200) {
                        alert("Tạo thành công");
                        setPhieuNhapCreate({
                            ngay: "",
                            idnhanvien: "",
                            idnhacungcap: "",
                        })
                        window.location.reload()
                    } else {
                        alert("Tài khoản đã tồn tại")
                        setPhieuNhapCreate({
                            ngay: "",
                            idnhanvien: "",
                            idnhacungcap: "",
                        })
                    }
                }
            })
            .catch((err) => {
                alert("Error!")
                setPhieuNhapCreate({
                    ngay: "",
                    idnhanvien: "",
                    idnhacungcap: "",
                })
            })
    }
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

    const [idPhieuNhap, setIdPhieuNhap] = useState({
        id: "",
    });

    const [listDetail, setListDetail] = useState([{
        soluong: "",
        idvacxin: "",
    }
    ]);
    const [detail, setDetail] = useState({
        soluong: "",
        idvacxin: "",
    });
    const handleAdDetail = (event) => {
        const newdata = { ...detail };
        newdata[event.target.id] = event.target.value;
        setDetail(newdata);
    };

    function submitCreateDetail() {
        listDetail.map(item => {
            var newdata = { ...item, idphieunhap: idPhieuNhap.id }

            api.createChiTietPhieuNhap(newdata)
            api.updatePhieuNhap(idPhieuNhap.id)   
        })
        api.editPhieuNhap(idPhieuNhap.id, { trangthai: true })
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
            <button className="btn_add" onClick={CreateOpen}>Tạo mới</button>
            <table id="customers">
                <tr>
                    <th>id</th>
                    <th>Ngày</th>
                    <th>Nhân viên</th>
                    <th>Nhà cung cấp</th>
                    <th>Tổng tiền</th>
                    <th>chức năng</th>
                </tr>
                {
                    listPhieuNhap.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{moment(item.ngay).utc().format('DD/MM/YYYY')}</td>
                                <td>{listNhanVien.map(icon => icon.id===item.idnhanvien?icon.ten:"")}</td>
                                <td>{listNhaCungCap.map(icon => icon.id===item.idnhacungcap?icon.ten:"")}</td>
                                <td>{item.trangthai === false ? "Đang tạo" : item.tongtien}</td>
                                <td>
                                    <button onClick={() => {
                                        setIdPhieuNhap(item)
                                    }}>
                                        <i onClick={viewDetailOpen} className="fas fa-eye"></i>
                                    </button>
                                    <button onClick={() => {
                                        setIdPhieuNhap(item)
                                    }}>
                                        <i onClick={detailsOpen} className="fas fa-plus"></i>
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

            <Modal
                open={create}
                onClose={CreateClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Thêm phiếu nhập
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="changePasswordInputUser">
                            <form className="changePasswordForm" onSubmit={(e) => submitCreatePhieuNhap(e)}>
                                <div className="row">
                                    <div className="col-12 a">
                                        <TextField label="Ngày" type="date" variant="outlined" onChange={handleCreatePhieuNhap} id="ngay" value={PhieuNhapCreate.ngay} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <TextField
                                            id="idnhanvien"
                                            select
                                            label="Nhân viên"
                                            value={PhieuNhapCreate.idnhanvien}
                                            onChange={handleCreatePhieuNhap}
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            {listNhanVien.map((option) => (
                                                <option key={option.id} value={option.id}>
                                                    {option.ten}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <TextField
                                            id="idnhacungcap"
                                            select
                                            label="Nhà cung cấp"
                                            value={PhieuNhapCreate.idnhacungcap}
                                            onChange={handleCreatePhieuNhap}
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            {listNhaCungCap.map((option) => (
                                                <option key={option.id} value={option.id}>
                                                    {option.ten}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <br />
                                <button className="btn_submit">Xác nhận</button>
                            </form>
                        </div>
                    </Typography>
                </Box>
            </Modal>

            {/*detail */}
            <Modal
                open={details}
                onClose={detailsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Thêm Chi Tiết
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <table id="customers">
                            <tr>
                                <th>Vacxin</th>
                                <th>Số lượng</th>
                            </tr>
                            {
                                listDetail.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.idvacxin}</td>
                                            <td>{item.soluong}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </Typography>
                    <button type="button" onClick={addDetailsOpen}>Thêm</button>
                    <button onClick={() => {
                        submitCreateDetail()
                        detailsClose()                 
                        window.location.reload()
                    }} >Xác nhận</button>
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
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Chọn Vacxin
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="changePasswordInputUser">
                            <div className="row">
                                <div className="col-12">
                                    <TextField
                                        id="idvacxin"
                                        select
                                        label="Vac xin"
                                        value={detail.idvacxin}
                                        onChange={handleAdDetail}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        {listVacxin.map((option) => (
                                            <option key={option.id} value={option.id}>
                                                {option.ten}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 a">
                                    <TextField label="Số lượng" type="text" variant="outlined" onChange={handleAdDetail} id="soluong" value={detail.soluong} />
                                </div>
                            </div>
                            <br />
                            <button onClick={() => {
                                listDetail.push(detail)
                                addDetailsClose()
                            }}>
                                Thêm
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
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Chi Tiết
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <table id="customers">
                            <tr>
                                <th>Vacxin</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                            {
                                listCTPN.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.idvacxin}</td>
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
                        Bạn có chắc chắn muốn xóa {deletePhieuNhap.ten}
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