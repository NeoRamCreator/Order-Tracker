import { useEffect, useState } from "react";

// import { deleteRoute } from "../actions/route";
// import { getRoutes } from "../actions/route";

import { getRoutes } from "../actions/route";
import { deleteRouter } from "../actions/route";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
      <Box sx={{ width: 500, border: '2px solid' , position: 'relative'}}>
        <Button variant="outlined" sx={{position: 'absolute', right: 0}} onClick={() => fetchData()}>ОБНОВИТЬ</Button>
        <h2>Список маршрутов</h2>
        {routes && (
          routes.map(route => {
            return (
              <div style={styles.div} key={route.id}>
                <Button variant="outlined" onClick={() => deleteRouteItem(route.id)} >DELETE</Button>
                <div>{route.id}</div>
                <div>{route.from}</div>
                <div>{route.to}</div>
                <div>{route.current_geo}</div>
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