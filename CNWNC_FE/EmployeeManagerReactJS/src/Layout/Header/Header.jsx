import React, { useState, useRef, useEffect } from 'react';
import '../Header/Header.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { axios } from '../../HeaderAPI';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import api from '../../API';

function Header() {
    const history = useHistory();

    const [num, setNum] = useState(localStorage.getItem("time"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [changePass, setChangePass] = React.useState(null);
    const [changePassword, setDataChangePassword] = useState({
        username: localStorage.getItem("username"),
        oldPass: "",
        newPass: "",
        confirm: ""
    })

    const Logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        localStorage.removeItem("loginFrist");
        history.push("/")
        window.location.reload()
    }

    let intervalRef = useRef();
    const decreaseNum = () => setNum((prev) => prev - 1);
    useEffect(() => {
        intervalRef.current = setInterval(decreaseNum, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);

    localStorage.setItem("time", num);
    if (num === 60) {
        alert("Thời gian còn lại là 1 phút. Vui lòng lưu lại toàn bộ thông tin trong phiên đăng nhập")
    } else if (num === 0) {
        alert("Hết phiên đăng nhập")
        Logout();
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // ChangePassword
    const handleClickChangePass = (event) => {
        setChangePass(event.currentTarget);
    };
    const handleCloseChangePass = () => {
        setChangePass(null);
    };

    function submitChangePass(e) {
        e.preventDefault();
        axios.put("nhanvien/changepass", changePassword)
            .then((res) => {
                alert("Thay đổi mật khẩu thành công!");
                handleClose();
                handleCloseChangePass();
            })
            .catch(err => {
                setDataChangePassword({
                    username: localStorage.getItem("username"),
                    oldPass: "",
                    newPass: "",
                    confirm: ""
                })
                alert("Error")
            })
    }
    function handleChangePass(e) {
        const newdata = { ...changePassword };
        newdata[e.target.id] = e.target.value;
        setDataChangePassword(newdata);
    }

    const [listTrungTam, setListTrungTam] = useState([]);
    const getArrTT = async () => {
        const response = await api.getTrungTam()
        if (response && response.data) {
            setListTrungTam(response.data)
        }
    }
    console.log(listTrungTam)
    useEffect(() => {
        getArrTT()
    }, []);

    const idTrungTam = localStorage.getItem("idTrungTam")

    return (
        <div className="adminHeader">
            <div className="adminLogo">
                <img src="https://www.theindianwire.com/wp-content/uploads/2020/08/vaccine-for-corona.jpg" alt="logo" />
            </div>
            <div className="adminListNavbar">
                <ul>
                    <li>
                        <Link to="/admin" className="nav-link">Nhân viên</Link>
                    </li>
                    <li>
                        <Link to="/admin/vacxin" className="nav-link">Vacxin</Link>
                    </li>
                    {/* <li>
                        <Link to="/admin/phieunhap" className="nav-link">Phiếu nhập</Link>
                    </li> */}
                    <li>
                        <Link to="/admin/phieuxuat" className="nav-link">Phiếu xuất</Link>
                    </li>
                    <li>
                        <Link to="/admin/kho" className="nav-link">Kho</Link>
                    </li>
                    {/* {
                        localStorage.getItem("role") === "0" ? '' : <li><Link to="/signup" className="nav-link">SignUp</Link></li>
                    } */}

                    <div className="AdminLog">
                        <div className="UserDropdown">
                            <h5 className='header_trungtam'>
                                {
                                    listTrungTam.map(icon => icon.id == idTrungTam ? icon.ten : "")
                                }
                                </h5>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <p className="p_user"><i className="far fa-user"></i> {localStorage.getItem("username")}</p>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem aria-controls="changePass-menu" onClick={handleClickChangePass}>Change Password</MenuItem>
                                <MenuItem onClick={() => {
                                    handleClose();
                                    Logout()
                                }}>Logout</MenuItem>
                            </Menu>
                            <Menu
                                id="changePass-menu"
                                anchorEl={changePass}
                                keepMounted
                                open={Boolean(changePass)}
                                onClose={handleCloseChangePass}>
                                <MenuItem>
                                    <div className="changePasswordInputUser">
                                        <form className="changePasswordForm" onSubmit={(e) => submitChangePass(e)}>
                                            <div className="changePasswordInputDev">
                                                <label htmlFor="username">User Name:</label>
                                                <input value={changePassword.username} type="text" />
                                            </div>
                                            <div className="changePasswordInputDev">
                                                <label htmlFor="password">Old Pass:</label>
                                                <input onChange={(e) => handleChangePass(e)} id="oldPass" value={changePassword.oldPass} type="password" />
                                            </div>
                                            <div className="changePasswordInputDev">
                                                <label htmlFor="password">New Pass:</label>
                                                <input onChange={(e) => handleChangePass(e)} id="newPass" value={changePassword.newPass} type="password" />
                                            </div>
                                            <div className="changePasswordInputDev">
                                                <label htmlFor="password">Confirm:</label>
                                                <input onChange={(e) => handleChangePass(e)} id="confirm" value={changePassword.confirm} type="password" />
                                            </div>
                                            <div className="changePasswordInputDevBtn">
                                                <button className="btn_cancel" type="button" onClick={() => {
                                                    handleClose();
                                                    handleCloseChangePass();
                                                }}>CANCEL</button>
                                                <button className="btn_save">SAVE</button>
                                            </div>
                                        </form>
                                    </div>
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Header;