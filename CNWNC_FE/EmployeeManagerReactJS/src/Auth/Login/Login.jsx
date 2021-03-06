import React, { useState } from 'react';
import '../Login/Login.scss';
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import api from '../../API';

function Login() {
    const history = useHistory();
    const checkFristLogin = () => {
        const UserLoginFrist = localStorage.getItem("loginFrist");
        if (UserLoginFrist === '1') {
            history.push("/admin")
            window.location.reload()
        } else {
            history.push("/selectcode")
        }
    }

    const [dataLogin, setDataLogin] = useState({
        username: "",
        password: "",
    })
    function submit(e) {
        e.preventDefault();
        api.login(dataLogin)
            .then((res) => {
                console.log(res)
                const decode = jwt_decode(res.data.accessToken);
                localStorage.setItem("accessToken", res.data.accessToken);
                localStorage.setItem("username", decode.username);
                localStorage.setItem("email", decode.email);
                localStorage.setItem("loginFrist", decode.loginFrist);
                localStorage.setItem("idNV", decode.idNV);
                localStorage.setItem("idTrungTam", decode.idTrungTam);
                checkFristLogin();
            })
            .catch(err => {
                setDataLogin({
                    username: "",
                    password: ""
                })
                alert("UserName Or Password are wrong")
            })
    }

    function handle(event) {
        const newdata = { ...dataLogin };
        newdata[event.target.id] = event.target.value;
        setDataLogin(newdata);
    }

    return (
        <div className="loginPage1">
            <div className="login">
                <div className="loginLogo">
                    <img src="https://pafssh.provirtualmeeting.com/wp-content/uploads/2020/09/login.png" alt="logo" />
                </div>
                <div className="loginInput">
                    <form className="loginForm" onSubmit={(e) => submit(e)}>
                        <div className="loginInputDev">
                            <label htmlFor="username">User Name:</label>
                            <input onChange={handle} id="username" value={dataLogin.username} type="text" required />
                        </div>
                        <div className="loginInputDev">
                            <label htmlFor="password">Password:</label>
                            <input onChange={handle} id="password" value={dataLogin.password} type="password" required/>
                        </div>
                        <div className="loginInputDevBtn">
                            <button>LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;