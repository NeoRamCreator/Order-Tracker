import { useEffect, useState } from "react";

import { deleteUser } from "../actions/user";
import { getUsers } from "../actions/user";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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


//   "full_name": "Dima",   "current_geo": "123 123"
  return (
    <>
      <Box sx={{ width: 500, border: '2px solid', position: 'relative' }}>
      <Button variant="outlined" sx={{position: 'absolute', right: 0}} onClick={() => fetchData()}>ОБНОВИТЬ</Button>

        <h2>Список водительей</h2>
        {/* <Button variant="outlined" onClick={() => fetchData()}>ОБНОВИТЬ</Button> */}
        {users && (
          users.map(user => {
            return (
              <div style={styles.div} key={user.id}>
                <Button variant="outlined" onClick={() => deleteUserItem(user.id)} >DELETE</Button>
                <div>{user.id}</div>
                <div>{user.full_name}</div>
                <div>{user.current_geo}</div>
                {/* <div></div> */}
              </div>
            )
          })
        )}
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