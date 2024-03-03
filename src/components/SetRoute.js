import { useEffect, useState } from "react";

// import { deleteRoute } from "../actions/route";
// import { getRoutes } from "../actions/route";

import { getRoutes } from "../actions/route";
import { deleteRouter } from "../actions/route";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Pagination } from '@mui/material';


export default function SetRoutes() {
  const [routes, setRoutes] = useState(null)

  const deleteRouteItem = async (id) => {
    const del = await deleteRouter(id);
    fetchData();
  }



  const fetchData = async () => {
    const data = await getRoutes();
    setRoutes(data)
  };

  useEffect(() => {
    if (!routes) {
      fetchData();
    }
  }, [routes])

  //   "id": 4,
  //   "from": "d",
  //   "to": "B",
  //   "current_geo": 1


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
          <h2>Список маршрутов</h2>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Действие</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Откуда</TableCell>
                  <TableCell>Куда</TableCell>
                  <TableCell>Водитель</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>


                {routes && (
                  routes.map(route => {
                    return (
                      <TableRow key={route.id}>

                        <TableCell >
                          <Button variant="outlined" onClick={() => deleteRouteItem(route.id)} >DELETE</Button>
                        </TableCell>

                        <TableCell>{route.id}</TableCell>
                        <TableCell>{route.from}</TableCell>
                        <TableCell>{route.to}</TableCell>
                        <TableCell>{route.current_geo? 'есть' : 'нет'}</TableCell>

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