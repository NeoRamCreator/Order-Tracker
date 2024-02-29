import React, { useEffect, useState } from "react";
import { createOrder, getOrderData } from "../actions/order";
import { getRoutes } from "../actions/route";


import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import { observer } from 'mobx-react';
import appStore from "../store";


export default function TrackOrder() {
    const [data, setData] = useState('');
    const [order, setOrder] = useState('rrrrrrrr');
    const [showData, setShowData] = useState(false);

    //   const handleChangeRoute = (event) => {
    //     setRoute(event.target.value);
    //   };

    const fetchData = async () => {
        const data = await getOrderData(order);
        setData(data)
        console.log(data)

    };

    useEffect(() => {
        console.log(data)
        if (typeof data === 'object') {
            setShowData(true)
        } else {
            setShowData(false)
        }

    }, [data])

    return (
        <>
            <Box sx={{ width: 500, border: '2px solid' }}>
                <h2>Отследить заказ</h2>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="номер заказа"
                    value={order}
                    onChange={e => setOrder(e.target.value)}
                />
                {/* {typeof data} */}

                {showData &&
                    //  data.map((orderI, index) => {
                    // console.log(typeof data)
                    // console.log(data)
                    // return <h3 key={index}>{orderI.title} {orderI.from} {orderI.to} {orderI.current_geo}</h3>
                    (data.length > 0
                        ? <h3 >{data[0]?.title}: {data[0]?.from} - {data[0]?.to}, {data[0]?.current_geo}</h3>
                        : <h3>Заказ не найден</h3>
                    )
                    // })
                }


                {/* {title: 'rrrrrrrr', from: 'Москва', to: 'Ярославль', current_geo: '111 111'}
                {title: 'rrrrrrrr', from: 'Москва', to: 'Ярославль', current_geo: '111 111'} */}



                <Button variant="outlined" onClick={() => fetchData()}>
                    Показать
                </Button>
            </Box>


        </>
    )
}