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

import { Button } from '@mui/material'

import appStore from '../store';

import { autorun } from 'mobx';



const MapRoute = () => {
  const [mapRef, setMapRef] = useState(null);
  const [rp, setRp] = useState(null);
  // const [pl, setPl] = useState(null);
  const qwe = useRef(null);
  const [dataGeo, setDataGeo] = useState([]);

  const fetchData = async () => {
    if (appStore.trackOrder?.current_geo) {
      const coordinates = await appStore.trackOrder.current_geo.split(' ').map(Number);
      console.log(typeof coordinates, coordinates, Array(coordinates))
      setDataGeo(coordinates);
    }
  };





  useEffect(() => {
    const disposer = autorun(() => {
      console.log('TrackOrder title changed:', appStore.trackOrder?.title);
      if (appStore.trackOrder?.title) {
        findOrder();
      }
    });

    return disposer; 
  }, [appStore.trackOrder]);








  function update() {
    localStorage.clear()
    if (mapRef) {
      console.log(mapRef)
      mapRef.controls.add('routePanelControl', {
        maxWidth: 300,
      });
      var routePanel = mapRef.controls.get('routePanelControl').routePanel;
      routePanel.options.set('adjustMapMargin', true);

      routePanel.state.set({
        fromEnabled: false,
        from: appStore.trackOrder.from,
        to: appStore.trackOrder.to,
        type: "auto"
      });
    }
  }

  const findOrder = () => {
    // console.log(appStore.trackOrder.current_geo)
    // console.log(JSON.parse(JSON.stringify(appStore.trackOrder)));

    update()
    // const dataGeo = appStore.trackOrder.current_geo?.split(' ').map(Number)
    // const dataGeo = JSON.parse(JSON.stringify(appStore.trackOrder)).current_geo?.split(' ').map(Number)

    // console.log(dataGeo)
    // console.log(data)
    fetchData();

  }





  const test1 = async () => {
    await fetchData()
  }




  return (
    <>

      <div style={{}}>
        {/* <button onClick={() => test1()}>TEST</button> */}

        {appStore.trackOrder?.title}
        {appStore.trackOrder && (
          <Button variant="outlined" onClick={() => findOrder()}>Отследить заказ</Button>
        )}
        {appStore.trackOrder &&
          <>
            <div><h3>Заказ: {appStore.trackOrder.title}</h3></div>
            <div><h3>Маршрут: {appStore.trackOrder.from} - {appStore.trackOrder.to}</h3></div>
          </>
        }
        <div></div>
        {/* {appStore.trackOrder.current_geo} */}



        <YMaps
          query={{ apikey: 'b16ccf6b-dec1-421f-9d21-7ae98b1fabca' }}
        >
          <Map
            defaultState={{
              center: [55.751574, 37.573856], zoom: 6,
              controls: []
            }}
            width="100%" height="600px"
            instanceRef={(ref) => setMapRef(ref)}
          >
            {mapRef
              ? (null)
              : (<RoutePanel
                instanceRef={(ref) => setRp(ref)}
              />)}


            {dataGeo?.length > 0 && (
              <Placemark geometry={[dataGeo[0], dataGeo[1]]} />
            )}

          </Map>
        </YMaps>

      </div>
    </>
  );
};

export default MapRoute;







