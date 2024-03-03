





import AddOrders from '../components/AddOrders'
import SetOrders from '../components/SetOrders';


const setOrdersRout = {
    path: '/set-orders',
    element:
        <div>
            <SetOrders />
            <AddOrders />
        </div>,

};

export default setOrdersRout;