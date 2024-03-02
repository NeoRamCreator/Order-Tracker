import { Navigate } from 'react-router-dom';

import MapRoute from '../components/MapRoute';
import Main from '../pages/Main';

import trackOrder from './trackOrder';





const routes = [
    {
        path: '/',
        element: <Main />,
        // errorElement: <Error />,
        children: [
            {
                // index: true,
                element: <Navigate to='/track-order' replace />
            },

            trackOrder,

            // orders,
            // users,
            // routes,

            // setOrders,
            // setUsers,
            // setRoutes,

            // {
            //     path: '/*',
            //     element: <NotFound />,
            // }
        ]
    }
]

export default routes;