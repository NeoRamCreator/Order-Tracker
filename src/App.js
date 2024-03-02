// // https://pbe-react-yandex-maps.vercel.app/en/api/controls/route-panel/
// // https://yandex.com/dev/jsapi-v2-1/doc/en/v2-1/ref/reference/control.RoutePanel
// // https://developer.tech.yandex.ru/services

import React, { useEffect, useState } from 'react';

import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import AddOrders from './components/AddOrders';
import AddUsers from './components/AddUsers';
import AddRoutes from './components/AddRoutes';
import TrackOrder from './components/TrackOrder';

import SetOrders from './components/SetOrders';
import SetUsers from './components/SetUsers';
import SetRoutes from './components/SetRoute';

import MapRoute from './components/MapRoute';

import routes from './routes';




const App = () => {

  const [route, setRoute] = useState(null);

  useEffect(() => {
    setRoute(createBrowserRouter(routes))
  }, [])

  if (route) {
    return <RouterProvider router={route}/>
  }


  return (
    <>
      <h2>Отследить</h2>
      <TrackOrder />

      <h2>крта</h2>
      <MapRoute />

      <h2>Создать</h2>
      <AddOrders />
      <AddUsers />
      <AddRoutes />


      <h2>Список</h2>
      <SetOrders />
      <SetUsers />
      <SetRoutes />
    </>
  );
};

export default App;





