import React, { useEffect, useState } from 'react';
import api from '../../API';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@material-ui/core/TextField';

function Kho() {
    const moment = require('moment')

    const [listVacxin, setListVacxin] = useState([]);
    const getArrVacxin = async () => {
        const response = await api.getVacxin()
        if (response && response.data) {
            setListVacxin(response.data)
        }
    }

    const [listTrungTam, setListTrungTam] = useState([]);
    const getArrTrungTam = async () => {
        const response = await api.getTrungTam()
        if (response && response.data) {
            setListTrungTam(response.data)
        }
    }
    

    const idTrungTam = localStorage.getItem("idTrungTam")
    const [listKho, setListKho] = useState([]);
    const getArr = async () => {
        const response = await api.getChiTietKho(idTrungTam)
        if (response && response.data) {
            setListKho(response.data)
        }
    }
    useEffect(() => {
        getArrVacxin();
        getArr();
        getArrTrungTam();
    }, []);

    //create
    //end create
    //delete
    //end delete
    return (
        <div className="table_admin">
            <button className="btn btn-primary">Tạo mới</button>
            <table id="customers">
                <tr>
                    <th>id</th>
                    <th>Trung Tâm</th>
                    <th>Vacxin</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>#</th>
                </tr>
                {
                    listKho.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{listTrungTam.map(icon => icon.id === item.idtrungtam ? icon.ten : "")}</td>
                                <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.ten : "")}</td>
                                <td>{item.soluong}</td>
                                <td>{listVacxin.map(icon => icon.id === item.idvacxin ? icon.dongia : "")}</td>
                                <td>
                                    <button>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>

                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Kho;