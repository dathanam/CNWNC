import React, { useEffect, useState } from 'react';
import '../NhaCungCap/NhaCungCap.css';
import { useHistory } from "react-router-dom";
import api from '../../API';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@material-ui/core/TextField';

function NhaCungCap() {
    const history = useHistory();

    const [listNhaCungCap, setListNhaCungCap] = useState([]);
    const getArr = async () => {
        const response = await api.getNhaCungCap()
        if (response && response.data) {
            setListNhaCungCap(response.data)
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
    const [NhaCungCapCreate, setNhaCungCapCreate] = useState([{
        ten: "",
        diachi: ""
    }]);
    function handleCreateNhaCungCap(event) {
        const newdata = { ...NhaCungCapCreate };
        newdata[event.target.id] = event.target.value;
        setNhaCungCapCreate(newdata);
    }
    function submitCreateNhaCungCap(e) {
        e.preventDefault();
        api.createNhaCungCap(NhaCungCapCreate)
            .then((res) => {
                console.log(res)
                if (res.data.statusCode === 200) {
                    if (res.data.statusCode === 200) {
                        alert("Thêm Thành Công");
                        setNhaCungCapCreate({
                            ten: "",
                            diachi: ""
                        })
                        window.location.reload()
                    }else {
                        alert(res.data.message)
                        setNhaCungCapCreate({
                            ten: "",
                            diachi: ""
                        })
                    }
                }
            })
            .catch((err) => {
                alert("Error!")
                setNhaCungCapCreate({
                    ten: "",
                    diachi: ""
                })
            })
    }
    //end create

    //edit
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [NhaCungCapEdit, setNhaCungCapEdit] = useState([{}]);
    function handleEditNhaCungCap(event) {
        const newdata = { ...NhaCungCapEdit };
        newdata[event.target.id] = event.target.value;
        setNhaCungCapEdit(newdata);
    }
    function submitEditNhaCungCap(e) {
        e.preventDefault();
        api.editNhaCungCap(NhaCungCapEdit.id, NhaCungCapEdit)
            .then((res) => {
                setNhaCungCapEdit({})
                window.location.reload()
            })
            .catch(err => {
                alert("Error")
            })
    }
    //end edit

    //delete
    const [deleteNhaCungCap, setDeleteNhaCungCap] = useState([{}]);
    const [deleteModel, setDeleteModel] = React.useState(false);
    const deleteOpen = () => setDeleteModel(true);
    const deleteClose = () => setDeleteModel(false);
    function submitDelete() {
        api.deleteNhaCungCap(deleteNhaCungCap.id)
    }
    //end delete

    return (
        <div className="table_admin">
            <button className="btn_add" onClick={CreateOpen}>Tạo mới</button>
            <table id="customers">
                <tr>
                    <th>id</th>
                    <th>tên</th>
                    <th>địa chỉ</th>
                    <th>chức năng</th>
                </tr>
                {
                    listNhaCungCap.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.ten}</td>
                                <td>{item.diachi}</td>
                                <td>
                                    <button onClick={() => {
                                        setNhaCungCapEdit(item)
                                    }}>
                                        <i onClick={handleOpen} className="fas fa-edit"></i>
                                    </button>
                                    <button onClick={() => {setDeleteNhaCungCap(item)}}>
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
                        <form onSubmit={(e) => submitEditNhaCungCap(e)}>
                            <TextField label="Địa chỉ" variant="outlined" onChange={handleEditNhaCungCap} id="diachi" value={NhaCungCapEdit.diachi} />
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
                        <form onSubmit={(e) => submitCreateNhaCungCap(e)}>
                        <TextField label="Tên" variant="outlined" onChange={handleCreateNhaCungCap} id="ten" value={NhaCungCapCreate.ten} />
                        <TextField label="Địa chỉ" variant="outlined" onChange={handleCreateNhaCungCap} id="diachi" value={NhaCungCapCreate.diachi} />
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
                        Bạn có chắc chắn muốn xóa {deleteNhaCungCap.ten}
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

export default NhaCungCap;