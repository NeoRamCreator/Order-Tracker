import { useEffect, useState } from "react";

import { deleteUser } from "../actions/user";
import { getUsers } from "../actions/user";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Pagination } from '@mui/material';

export default function SetUsers() {
  const [users, setUsers] = useState(null)

  const deleteUserItem = async (id) => {
    const del = await deleteUser(id);
    fetchData();
  }



  const fetchData = async () => {
    const data = await getUsers();
    setUsers(data)
  };

  useEffect(() => {
    if (!users) {
      fetchData();
    }
  }, [users])


  return (
    <>
      <Box sx={
        {
          position: 'relative',
          paddingTop: '30px',
          margin: '30px 0'
        }
      }>
        <Button variant="outlined" sx={{ position: 'absolute', right: 0 }} onClick={() => fetchData()}>ОБНОВИТЬ</Button>

        <Paper sx={{ width: '100%' }}>
          <h2>Список водительей</h2>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Дейcтвие</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Имя</TableCell>
                  <TableCell>Местоположение</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>


                {users && (
                  users.map(user => {
                    return (
                      <TableRow key={user.id}>

                        <TableCell >
                          <Button sx={{ margin: '0px' }} variant="outlined" onClick={() => deleteUserItem(user.id)} >DELETE</Button>
                        </TableCell>

                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.full_name}</TableCell>
                        <TableCell>{user.current_geo}</TableCell>

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

