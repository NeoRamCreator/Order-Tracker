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
    const [order, setOrder] = useState('q1234567');
    const [showData, setShowData] = useState(false);

    //   const handleChangeRoute = (event) => {
    //     setRoute(event.target.value);
    //   };

    const fetchData = async () => {
        const data = await getOrderData(order);
        appStore.updateTrackOrder(data[0])
        setData(data)
        console.log(data)
        console.log(appStore.trackOrder)

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
            <Box sx={
                {
                    border: '2px solid',
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'spa'
                    padding: '0 20px'
                }
            }>
                <h2>Отследить заказ</h2>
                <TextField
                    sx={{ width: '50%', margin: '0 20px' }}
                    margin="normal"
                    required
                    // fullWidth
                    label="номер заказа"
                    value={order}
                    onChange={e => setOrder(e.target.value)}
                />

                {/* {showData &&
                    (data?.length > 0
                        ? <h3 >{data[0]?.title}: {data[0]?.from} - {data[0]?.to}, {data[0]?.current_geo}</h3>
                        : <h3>Заказ не найден</h3>
                    )
                } */}





                <Button sx={{ width: '300px' }}
                    variant="outlined" onClick={() => fetchData()}>
                    Отследить заказ
                </Button>
            </Box>


        </>
    )
}