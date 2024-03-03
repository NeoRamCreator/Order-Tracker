import { Navigate } from 'react-router-dom';

import MapRoute from '../components/MapRoute';
import Main from '../pages/Main';

import trackOrder from './trackOrder';
import orders from './orders';
import routs from './routs';
import users from './users';
import setOrdersRout from './setOrders';
import setRoutesRout from './setRoutes';
import setUsersRout from './setUsers';




const routes = [
    {
        path: '/',
        element: <Main />,
        // errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Navigate to='/track-order' replace />
            },

            trackOrder,

            orders,
            users,
            routs,

            setOrdersRout,
            setUsersRout,
            setRoutesRout,

            // {
            //     path: '/*',
            //     element: <NotFound />,
            // }
        ]
    }
]

export default routes;