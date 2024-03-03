import { useEffect, useState } from "react";
import { getOrders } from "../actions/order";
import { deleteOrder } from "../actions/order";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Pagination } from '@mui/material';


export default function SetOrders() {
  const [orders, setOrders] = useState(null)

  const deleteOrderItem = async (id) => {
    const del = await deleteOrder(id);
    fetchData();
  }

  const fetchData = async () => {
    const data = await getOrders();
    setOrders(data)
  };

  useEffect(() => {
    if (!orders) {
      fetchData();
    }
  }, [orders])


  // {id: 16, title: null, route_id: null}
  return (
    <>
      <Box sx={
        {
          // width: 500,
          // border: '2px solid',
          position: 'relative'
        }
      }>
        <Button variant="outlined" sx={{ position: 'absolute', right: 0 }} onClick={() => fetchData()}>ОБНОВИТЬ</Button>

        <Paper sx={{ width: '100%' }}>
          <h2>Список заказов</h2>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Действие</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Название заказа</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>


                {orders && (
                  orders.map(order => {
                    return (
                      <TableRow key={order.id}>

                        <TableCell >
                          <Button variant="outlined" onClick={() => deleteOrderItem(order.id)} >DELETE</Button>
                        </TableCell>

                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.title}</TableCell>

                      </TableRow>
                    )
                  })
                )}

              </TableBody>
            </Table>
          </TableContainer>

        </Paper>

      </Box>

    </>
  )
}


const styles = {
  div: {
    width: '500px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}