import React, { useEffect, useState } from 'react';
import '../Vacxin/Vacxin.css';
import api from '../../API';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@material-ui/core/TextField';

function Vacxin() {
    const moment = require('moment')

    const [listVacxin, setListVacxin] = useState([]);
    const getArr = async () => {
        const response = await api.getVacxin()
        if (response && response.data) {
            setListVacxin(response.data)
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
    const [VacxinCreate, setVacxinCreate] = useState([{
        ten: "",
        soluong: "",
        dongia: "",
        ngaysanxuat: "",
        hansudung: "",
        doituongsudung: "",
        solo: "",
        baoquan: "",
        gianhap: "",
    }]);
    function handleCreateVacxin(event) {
        const newdata = { ...VacxinCreate };
        newdata[event.target.id] = event.target.value;
        setVacxinCreate(newdata);
    }
    function submitCreateVacxin(e) {
        e.preventDefault();
        api.createVacxin(VacxinCreate)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    if (res.data.statusCode === 200) {
                        alert("Thêm thành công");
                        setVacxinCreate({
                            ten: "",
                            soluong: "",
                            dongia: "",
                            ngaysanxuat: "",
                            hansudung: "",
                            doituongsudung: "",
                            solo: "",
                            baoquan: "",
                            gianhap: "",
                        })
                        window.location.reload()
                    } else {
                        alert("Vacxin đã tông tại")
                        setVacxinCreate({
                            ten: "",
                            soluong: "",
                            dongia: "",
                            ngaysanxuat: "",
                            hansudung: "",
                            doituongsudung: "",
                            solo: "",
                            baoquan: "",
                            gianhap: "",
                        })
                    }
                }
            })
            .catch((err) => {
                alert("Error!")
                setVacxinCreate({
                    ten: "",
                    soluong: "",
                    dongia: "",
                    ngaysanxuat: "",
                    hansudung: "",
                    doituongsudung: "",
                    solo: "",
                    baoquan: "",
                    gianhap: "",
                })
            })
    }
    //end create
    //delete
    const [deleteVacxin, setDeleteVacxin] = useState([{}]);
    const [deleteModel, setDeleteModel] = React.useState(false);
    const deleteOpen = () => setDeleteModel(true);
    const deleteClose = () => setDeleteModel(false);
    function submitDelete() {
        api.deleteVacxin(deleteVacxin.id)
    }
    //end delete
    return (
        <div className="table_admin">
            <button className="btn btn-primary" onClick={CreateOpen}>Tạo mới</button>
            <table id="customers">
                <tr>
                    <th>id</th>
                    <th>tên</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>ngày sản xuất</th>
                    <th>hạn sử dụng</th>
                    <th>đối tượng sử dụng</th>
                    <th>số lô</th>
                    <th>bảo quản</th>
                    <th>#</th>
                </tr>
                {
                    listVacxin.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.ten}</td>
                                <td>{item.soluong}</td>
                                <td>{item.dongia}</td>
                                <td>{moment(item.ngaysanxuat).utc().format('DD/MM/YYYY')}</td>
                                <td>{moment(item.hansudung).utc().format('DD/MM/YYYY')}</td>
                                <td>{item.doituongsudung}</td>
                                <td>{item.solo}</td>
                                <td>{item.baoquan}</td>
                                <td>
                                    <button onClick={() => { setDeleteVacxin(item) }}>
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
                        Thêm mới Vacxin
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={(e) => submitCreateVacxin(e)}>
                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="Tên" variant="outlined" onChange={handleCreateVacxin} id="ten" value={VacxinCreate.ten} />
                                </div>
                                <div className="col-6">
                                    <TextField label="Số lượng" variant="outlined" onChange={handleCreateVacxin} id="soluong" value={VacxinCreate.soluong} />
                                </div>
                            </div>

                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="Đơn giá" variant="outlined" onChange={handleCreateVacxin} id="dongia" value={VacxinCreate.dongia} />

                                </div>
                                <div className="col-6">
                                    <TextField label="Giá nhập" variant="outlined" onChange={handleCreateVacxin} id="gianhap" value={VacxinCreate.gianhap} />

                                </div>
                            </div>

                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="Ngày sản xuất" variant="outlined" onChange={handleCreateVacxin} id="ngaysanxuat" value={VacxinCreate.ngaysanxuat} />
                                </div>
                                <div className="col-6">
                                    <TextField label="Hạn sử dụng" variant="outlined" onChange={handleCreateVacxin} id="hansudung" value={VacxinCreate.hansudung} />
                                </div>
                            </div>
                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="Đối tượng sử dụng" variant="outlined" onChange={handleCreateVacxin} id="doituongsudung" value={VacxinCreate.doituongsudung} />
                                </div>
                                <div className="col-6">
                                    <TextField label="Bảo quản" variant="outlined" onChange={handleCreateVacxin} id="baoquan" value={VacxinCreate.baoquan} />
                                </div>
                            </div>
                            <div className="row rowCreate">
                                <div className="col-6">
                                    <TextField label="Số lô" variant="outlined" onChange={handleCreateVacxin} id="solo" value={VacxinCreate.solo} />
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
                        Bạn có chắc chắn muốn xóa {deleteVacxin.ten}
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

export default Vacxin;