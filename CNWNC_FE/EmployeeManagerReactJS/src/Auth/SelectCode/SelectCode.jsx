import React, { useState } from 'react';
import '../SelectCode/SelectCode.css';
import { useHistory } from "react-router-dom";
import api from '../../API' 

function SelectCode() {
    const history = useHistory();
    const [changeCode, setDataChangeCode] = useState({
        code: ""
    })
    const submitChangePass = (e) => {
        e.preventDefault();
        api.checkCode(changeCode)
            .then((res) => {
                console.log(res)
                if (res.data.statusCode === 200) {
                    setDataChangeCode({
                        code: ""
                    })
                    history.push("/admin")
                    window.location.reload()
                } else {
                    alert("Mã code không khớp")
                    setDataChangeCode({
                        code: ""
                    })
                }
            })
            .catch(err => {
                setDataChangeCode({
                    code: ""
                })
                alert("Mã code không chính xác")
            })
    }

    function handle(event) {
        const newdata = { ...changeCode };
        newdata[event.target.id] = event.target.value;
        setDataChangeCode(newdata);
    }
    return (
        <div className="loginPage">
            <div className="login">
                <div className="loginLogo">
                    <img src="https://pafssh.provirtualmeeting.com/wp-content/uploads/2020/09/login.png" alt="logo" />
                </div>
                <div className="loginInput">
                    <form className="loginForm" onClick={(e) => (submitChangePass(e))}>
                        <div className="loginInputDev">
                            <label htmlFor="username">Mã code: </label>
                            <input onChange={handle} id="code" value={changeCode.code} type="text" required />
                        </div>
                        <div className="loginInputDevBtn">
                            <button>Xác nhận</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SelectCode;