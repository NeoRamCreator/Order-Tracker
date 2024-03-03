import React, { useEffect, useState } from "react";
import { createOrder } from "../actions/order";
import { getRoutes } from "../actions/route";


import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


export default function AddOrders() {
  const [route, setRoute] = useState('');
  const [order, setOrder] = useState('');
  const [getRoute, setGetRoute] = useState();

  const handleChangeRoute = (event) => {
    setRoute(event.target.value);
  };

  const fetchData = async () => {
    const data = await getRoutes();
    setGetRoute(data)
  };

  useEffect(() => {
    if (!getRoute) {

      fetchData();
    }
  }, [])

  const next = async () => {
    createOrder({ "title": order, "route_id": route });
    fetchData();
    setOrder('');
    setRoute('');
  }

  return (
    <>
      <Box sx={
        {
          // width: 500, 
          // border: '2px solid' 
        }
      }>
        <h2>Добавить заказ</h2>
        <TextField
          margin="normal"
          required
          fullWidth
          label="номер заказа"
          value={order}
          onChange={e => setOrder(e.target.value)}
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl
            fullWidth
            required

          >
            <InputLabel id="demo-simple-select-label">Маршрут</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              // id="demo-simple-select"
              value={route}
              label="Маршрут"
              onChange={handleChangeRoute}
            >
              {getRoute &&

                getRoute.map((rout) => (
                  <MenuItem key={rout.id} value={rout.id}>
                    {`${rout.from} - ${rout.to}`}
                  </MenuItem>
                ))
              }

            </Select>
          </FormControl>
        </Box>

        <Button variant="outlined" onClick={() => next()}>
          добавмит заказ
        </Button>
      </Box>


    </>
  )
}