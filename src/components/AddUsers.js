import React, { useEffect, useState } from "react";
import { createOrder } from "../actions/order";
import { getRoutes } from "../actions/route";
import { createUser } from "../actions/user";


import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

// "full_name": "Dima2"
// "current_geo": "123 123"
export default function AddUsers() {
    const [fullName, setFullName] = useState('');
    const [currentGeo, setCurrentGeo] = useState('58.993450 31.751108');
    // const [getRoute, setGetRoute] = useState();

    // const handleChangeRoute = (event) => {
    //     setRoute(event.target.value);
    // };

    // const fetchData = async () => {
    //     const data = await getRoutes();
    //     setGetRoute(data)
    // };

    // useEffect(() => {
    //     if (!getRoute) {

    //         fetchData();
    //     }

    // }, [])

    return (
        <>
            <Box sx={{ width: 500, border: '2px solid' }}>
                <h2>Добавить транспорт</h2>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="ФИО"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                />

                <TextField
                    margin="normal"
                    // required
                    disabled
                    fullWidth
                    label="местоположение определяется автоматически"
                    value={currentGeo}
                    onChange={e => setCurrentGeo(e.target.value)}
                />



                <Button variant="outlined" onClick={() => createUser({ "full_name": fullName, "current_geo": currentGeo })}>
                    добавмит транспорт
                </Button>
            </Box>


        </>
    )
}