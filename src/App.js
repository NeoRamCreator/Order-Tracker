// // https://pbe-react-yandex-maps.vercel.app/en/api/controls/route-panel/
// // https://yandex.com/dev/jsapi-v2-1/doc/en/v2-1/ref/reference/control.RoutePanel
// // https://developer.tech.yandex.ru/services

import React, { useEffect, useRef, useState } from 'react';
import {
  YMaps,
  Map,
  Placemark,
  RoutePanel,
} from '@pbe/react-yandex-maps';

import AddOrders from './components/AddOrders';
import AddUsers from './components/AddUsers';
import AddRoutes from './components/AddRoutes';
import TrackOrder from './components/TrackOrder';

import SetOrders from './components/SetOrders';
import SetUsers from './components/SetUsers';
import SetRoutes from './components/SetRoute';

// import Test1 from './components/Test1'
import MapRoute from './pages/MapRoute';
const orders = [
  { id: 409196, route: { id: 235524 } },
  { id: 410322, route: { id: 235524 } },
  { id: 379620, route: { id: 235524 } },
  { id: 968538, route: { id: 235524 } },
  { id: 795879, route: { id: 235524 } },
  { id: 46286, route: { id: 235524 } },
  { id: 345666, route: { id: 235524 } },
  { id: 207646, route: { id: 235524 } },
  { id: 749382, route: { id: 235524 } },
  { id: 238407, route: { id: 235524 } },
  { id: 971909, route: { id: 235524 } },
  { id: 375135, route: { id: 235524 } },
  { id: 913036, route: { id: 235524 } },
  { id: 952880, route: { id: 235524 } },
  { id: 240057, route: { id: 235524 } },
  //
  { id: 266761, route: { id: 46486456 } },
  { id: 180230, route: { id: 46486456 } },
  { id: 839267, route: { id: 46486456 } },
  { id: 140445, route: { id: 46486456 } },
  { id: 856298, route: { id: 46486456 } },
  { id: 808681, route: { id: 46486456 } },
  { id: 14020, route: { id: 46486456 } },
  { id: 59925, route: { id: 46486456 } },
  { id: 583922, route: { id: 46486456 } },
  { id: 291923, route: { id: 46486456 } },
  { id: 146707, route: { id: 46486456 } },
  { id: 510795, route: { id: 46486456 } },
  { id: 537305, route: { id: 46486456 } },
  { id: 639294, route: { id: 46486456 } },
  { id: 753599, route: { id: 46486456 } },
  { id: 815191, route: { id: 46486456 } },
  //
  { id: 539039, route: { id: 457878656 } },
  { id: 630017, route: { id: 457878656 } },
  { id: 209292, route: { id: 457878656 } },
  { id: 346689, route: { id: 457878656 } },
  { id: 769208, route: { id: 457878656 } },
  { id: 172789, route: { id: 457878656 } },
  { id: 661286, route: { id: 457878656 } },
  { id: 31908, route: { id: 457878656 } },
  { id: 371029, route: { id: 457878656 } },
  { id: 689802, route: { id: 457878656 } },
  { id: 629707, route: { id: 457878656 } },
  { id: 457067, route: { id: 457878656 } },
  { id: 162991, route: { id: 457878656 } },
  { id: 822172, route: { id: 457878656 } },
  { id: 526714, route: { id: 457878656 } },
  { id: 296558, route: { id: 457878656 } },
  { id: 503812, route: { id: 457878656 } },
  { id: 388748, route: { id: 457878656 } },

  { id: 395947, route: { id: 457878656 } },
  { id: 524398, route: { id: 457878656 } },
  { id: 859683, route: { id: 457878656 } },
  { id: 735675, route: { id: 457878656 } },
  { id: 282367, route: { id: 457878656 } },
  { id: 313604, route: { id: 457878656 } },
  { id: 999266, route: { id: 457878656 } },
  { id: 185814, route: { id: 457878656 } },
  { id: 514656, route: { id: 457878656 } },
  { id: 136114, route: { id: 457878656 } },
  { id: 782899, route: { id: 457878656 } },
  { id: 779249, route: { id: 457878656 } },
  { id: 756094, route: { id: 457878656 } },
  { id: 193377, route: { id: 457878656 } },
  { id: 350297, route: { id: 457878656 } },
  { id: 742194, route: { id: 457878656 } },
  { id: 132793, route: { id: 457878656 } },
  //
  { id: 993540, route: { id: 2358978524 } },
  { id: 510291, route: { id: 2358978524 } },
  { id: 189186, route: { id: 2358978524 } },
  { id: 752162, route: { id: 2358978524 } },
  { id: 425800, route: { id: 2358978524 } },
  { id: 251073, route: { id: 2358978524 } },
  { id: 680227, route: { id: 2358978524 } },
  { id: 953434, route: { id: 2358978524 } },
  { id: 579977, route: { id: 2358978524 } },
  { id: 147617, route: { id: 2358978524 } },
  { id: 258342, route: { id: 2358978524 } },
  { id: 886464, route: { id: 2358978524 } },
  { id: 68235, route: { id: 2358978524 } },
  { id: 453176, route: { id: 2358978524 } },
  { id: 797429, route: { id: 2358978524 } },
  { id: 925925, route: { id: 2358978524 } },
  { id: 885703, route: { id: 2358978524 } },

  { id: 783798, route: { id: 2358978524 } },
  { id: 640454, route: { id: 2358978524 } },
  { id: 224427, route: { id: 2358978524 } },
  { id: 951216, route: { id: 2358978524 } },
  { id: 171863, route: { id: 2358978524 } },
  { id: 605503, route: { id: 2358978524 } },
  { id: 180764, route: { id: 2358978524 } },
  { id: 522130, route: { id: 2358978524 } },
  { id: 63750, route: { id: 2358978524 } },
  { id: 232567, route: { id: 2358978524 } },
  { id: 453303, route: { id: 2358978524 } },
  { id: 193008, route: { id: 2358978524 } },
  { id: 11769, route: { id: 2358978524 } },
  { id: 242610, route: { id: 2358978524 } },
  { id: 108180, route: { id: 2358978524 } },
  { id: 295680, route: { id: 2358978524 } },
  { id: 61631, route: { id: 2358978524 } },
]



const route = [
  {
    id: 235524, orders: [
      { id: 409196 },
      { id: 410322 },
      { id: 379620 },
      { id: 968538 },
      { id: 795879 },
      { id: 46286 },
      { id: 345666 },
      { id: 207646 },
      { id: 749382 },
      { id: 238407 },
      { id: 971909 },
      { id: 375135 },
      { id: 913036 },
      { id: 952880 },
      { id: 240057 },
    ], from: 'Москва', to: "Санкт-Петербург", currenGeo: [58.571620, 32.257039]
  },
  {
    id: 46486456, orders: [
      { id: 266761 },
      { id: 180230 },
      { id: 839267 },
      { id: 140445 },
      { id: 856298 },
      { id: 808681 },
      { id: 14020 },
      { id: 59925 },
      { id: 583922 },
      { id: 291923 },
      { id: 146707 },
      { id: 510795 },
      { id: 537305 },
      { id: 639294 },
      { id: 753599 },
      { id: 815191 },
    ], from: 'Казань', to: "Санкт-Петербург", currenGeo: [58.770933, 32.112805]
  },
  {
    id: 457878656, orders: [
      { id: 539039 },
      { id: 630017 },
      { id: 209292 },
      { id: 346689 },
      { id: 769208 },
      { id: 172789 },
      { id: 661286 },
      { id: 31908 },
      { id: 371029 },
      { id: 689802 },
      { id: 629707 },
      { id: 457067 },
      { id: 162991 },
      { id: 822172 },
      { id: 526714 },
      { id: 296558 },
      { id: 503812 },
      { id: 388748 },

      { id: 395947 },
      { id: 524398 },
      { id: 859683 },
      { id: 735675 },
      { id: 282367 },
      { id: 313604 },
      { id: 999266 },
      { id: 185814 },
      { id: 514656 },
      { id: 136114 },
      { id: 782899 },
      { id: 779249 },
      { id: 756094 },
      { id: 193377 },
      { id: 350297 },
      { id: 742194 },
      { id: 132793 },
    ], from: 'Москва', to: "Ярославль", currenGeo: [56.267158, 38.188808]
  },
  {
    id: 2358978524, orders: [
      { id: 993540 },
      { id: 510291 },
      { id: 189186 },
      { id: 752162 },
      { id: 425800 },
      { id: 251073 },
      { id: 680227 },
      { id: 953434 },
      { id: 579977 },
      { id: 147617 },
      { id: 258342 },
      { id: 886464 },
      { id: 68235 },
      { id: 453176 },
      { id: 797429 },
      { id: 925925 },
      { id: 885703 },

      { id: 783798 },
      { id: 640454 },
      { id: 224427 },
      { id: 951216 },
      { id: 171863 },
      { id: 605503 },
      { id: 180764 },
      { id: 522130 },
      { id: 63750 },
      { id: 232567 },
      { id: 453303 },
      { id: 193008 },
      { id: 11769 },
      { id: 242610 },
      { id: 108180 },
      { id: 295680 },
      { id: 61631 },
    ], from: 'Иваново', to: "Ковров", currenGeo: [56.812972, 41.351143]
  },
]



const App = () => {
  const [mapRef, setMapRef] = useState(null);
  const [rp, setRp] = useState(null);
  const qwe = useRef(null);

  // function update(data) {
  //   localStorage.clear()
  //   console.log('t', mapRef)
  //   if (mapRef) {
  //     console.log(mapRef)
  //     mapRef.controls.add('routePanelControl', {
  //       maxWidth: 300,
  //     });
  //     var routePanel = mapRef.controls.get('routePanelControl').routePanel;
  //     routePanel.options.set('adjustMapMargin', true);

  //     routePanel.state.set({
  //       fromEnabled: false,
  //       from: data.from,
  //       to: data.to,
  //       type: "auto"
  //     });
  //   }
  // }
  // const [data, setData] = useState({})

  // const findOrder = (id) => {
  //   const findOrderItem = orders.find(order => order.id === +id)
  //   console.log(findOrderItem)
  //   route.find(routeItem => routeItem.id === findOrderItem.route.id)
  //   const findRoutItem = route.find(routeItem => routeItem.id === findOrderItem.route.id)

  //   const data = { currenGeo: findRoutItem.currenGeo, from: findRoutItem.from, to: findRoutItem.to }
  //   setData(data)
  //   update(data)
  // }

  // const [inputOrder, setInputOrder] = useState(410322)

  return (
    <>
      <h2>крта</h2>
      <MapRoute />

      <h2>Создать</h2>
      <AddOrders />
      <AddUsers />
      <AddRoutes />

      <h2>Отследить</h2>
      <TrackOrder />

      <h2>Список</h2>
      <SetOrders />
      <SetUsers />
      <SetRoutes />
    </>
  );
};

export default App;










// useEffect(() => {
//   if (map && rp) {
//     // Добавление элемента управления "Панель маршрутизации"
//     // map.controls.add('routePanelControl', {
//     // maxWidth: 300,
//     // });
//     // console.log(map)
//     // console.log('rp', rp.routePanel._geolocateOnLoad)
//     // console.log('rp', rp.routePanel)

//     map.controls.add('routePanelControl')
//     // map.controls
//     console.log(map.controls.add('routePanelControl'))

//     // map.controls.add('routePanelControl', {
//     //   maxWidth: 300,
//     // });
//     var routePanel = map.controls.get('routePanelControl').routePanel;
//     // routePanel.options.set('adjustMapMargin', true);
//     routePanel.state.set({
//       fromEnabled: false,
//       from: "Москва",
//       to: "Санкт-Петербург",
//       type: "auto"
//     });

//     // rp.routePanel._geolocateOnLoad.from= 'Москва'
//     // rp.routePanel._geolocateOnLoad.from= ''
//     // rp.routePanel._geolocateOnLoad.to= 'Санкт-Петербург'
//     // rp.routePanel._geolocateOnLoad.to = 'Санкт-Петербург'

//     // // Получение ссылки на панель маршрутизации
//     // const routePanel = map.controls.get('routePanelControl').routePanel;

//     // // Настройка параметров панели маршрутизации
//     // routePanel.options.set('adjustMapMargin', true);

//     // // Установка состояния панели маршрутизации
//     // routePanel.state.set({
//     //   fromEnabled: false,
//     //   from: 'Москва',
//     //   to: 'Санкт-Петербург',
//     //   type: 'auto',
//     // });
//   }
// }, [map, rp]);





// import React, { useState, useEffect, useRef } from 'react';

// import {
//   YMaps,
//   Map,
//   Placemark,
//   RoutePanel,
//   RouteButton
// } from '@pbe/react-yandex-maps';
// // import { Placemark } from '@pbe/react-yandex-maps/typings/geo-objects/Placemark';

// const App = () => {
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   }, []);



//   function showError(error) {
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         console.log("User denied the request for Geolocation.");
//         break;
//       case error.POSITION_UNAVAILABLE:
//         console.log("Location information is unavailable.");
//         break;
//       case error.TIMEOUT:
//         console.log("The request to get user location timed out.");
//         break;
//       case error.UNKNOWN_ERROR:
//         console.log("An unknown error occurred.");
//         break;
//     }
//   }



//   function showPosition(position) {
//     setLatitude(position.coords.latitude);
//     setLongitude(position.coords.longitude);
//   }



//   const fromCoords = [55.753994, 37.622093];
//   const toCoords = [55.751574, 37.573856];

//   return (
//     <div>
//       {latitude} {longitude}
//       <YMaps  query={{ apikey: 'b16ccf6b-dec1-421f-9d21-7ae98b1fabca' }}>
//         <div>My awesome application with maps!</div>
//         <Map
//           defaultState={{ center: fromCoords, zoom: 9 }}
//           width="100%"
//           height="400px"
//         >
//           <Placemark geometry={fromCoords} />
//           <Placemark geometry={toCoords} />
//           <RoutePanel 
//             options={{ float: 'right' }}
//             state={{
//               from: `Текущее местоположение (широта: ${latitude}, долгота: ${longitude})`,
//               to: 'Москва, метро Черемушки'
//             }}
//           />
//           {/* <RoutePanel
//             options={{ float: 'right' }}
//             state={{
//               from: 'Москва, Льва Толстого, 16',
//               to: 'Москва, метро Черемушки'
//             }}
//           /> */}
//         </Map>
//       </YMaps>

//     </div>
//   );
// }

// export default App;
