import { useEffect, useState } from "react";
import { getOrders } from "../actions/order";
import { deleteOrder } from "../actions/order";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
      <Box sx={{ width: 500, border: '2px solid', position: 'relative' }}>
      <Button variant="outlined" sx={{position: 'absolute', right: 0}} onClick={() => fetchData()}>ОБНОВИТЬ</Button>

        <h2>Список заказов</h2>
        {/* <Button variant="outlined" onClick={() => fetchData()}>ОБНОВИТЬ</Button> */}
        {orders && (
          orders.map(order => {
            return (
              <div style={styles.div} key={order.id}>
                <Button variant="outlined" onClick={() => deleteOrderItem(order.id)} >DELETE</Button>
                <div>{order.id}</div>
                <div>{order.title}</div>
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