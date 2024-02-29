import React, { useEffect, useState } from "react";
import {  getOrderData } from "../actions/order";
import { getUsers } from "../actions/user";
// import { createOrder } from "../actions/order";
import { createRoute } from "../actions/route";


import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


export default function AddRoutes() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [currentGeo, setCurrentGeo] = useState('');
  const [getUsersData, setGetUsersData] = useState();

  const handleChangeUsers = (event) => {
    setCurrentGeo(event.target.value);
  };

  const fetchData = async () => {
    const data = await getUsers();
    setGetUsersData(data)
  };

  useEffect(() => {
    if (!getUsersData) {
      fetchData();
    }
  }, [])

  return (
    <>
      <Box sx={{ width: 500, border: '2px solid' }}>
        <h2>Добавить маршрут</h2>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Отправление из"
          value={from}
          onChange={e => setFrom(e.target.value)}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          label="Доставка в"
          value={to}
          onChange={e => setTo(e.target.value)}
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl
            fullWidth
            required

          >
            <InputLabel id="demo-simple-select-label">Перевозчик</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              // id="demo-simple-select"
              value={currentGeo}
              label="Перевозчик"
              onChange={handleChangeUsers}
            >
              {getUsersData &&

                getUsersData.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {`${user.full_name}`}
                  </MenuItem>
                ))
              }

            </Select>
          </FormControl>
        </Box>

        <Button variant="outlined" onClick={() => createRoute({ "from": from, "to": to, 'current_geo': currentGeo })}>
          добавмит маршрут
        </Button>
      </Box>


    </>
  )
}