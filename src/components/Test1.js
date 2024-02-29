import React, { useEffect, useRef } from 'react';
import {
  YMaps,
  Map,
  useYMaps,
  RoutePanel,
} from '@pbe/react-yandex-maps';

const Test1 = () => {
  const mapRef = useRef(null);
  const rp = useRef(null);
  // const ymaps = useYMaps(['Map']);

  useEffect(() => {
    // console.log(mapRef?.current)
    // window.ymaps
    if (mapRef.current) {
      //   return;
      // }

      // console.log(rp.current)
      // rp.current.state.set({
      //   // fromEnabled: false,
      //   from: "Москва",
      //   to: "Санкт-Петербург",
      //   // from: data.from,
      //   // to: data.to,
      //   type: "auto"
      // });
      // console.log(mapRef.current)
      // console.log(mapRef.current.controls)
      // const nM = mapRef.current.geoObjects

      // console.log(nM)

      // new mapRef.current.controls('routePanelControl', {
      //   maxWidth: 300,
      // })

      // const m = new window.ymaps3
      console.log(
        // new mapRef.current.controls('routePanelControl', {
        //   maxWidth: 300,
        // })
        window.ymaps3.ready
          .then((ym) => {
            console.log(ym)
            // Code to execute when Yandex.Maps API is ready
          })
          .catch((error) => {
            console.log(error)

            // Handle error if Yandex.Maps API fails to load
          })
        // window.ymaps3
        // window
      )


      // var routePanel = mapRef.current.controls.get('routePanelControl').routePanel;
      // routePanel.options.set('adjustMapMargin', true);
      // rp
      // new mapRef.current.controls.get('routePanelControl')


      // const map = (mapRef.current);

      // map.({
      //   center: [55.751574, 37.573856],
      //   zoom: 9,
      //   controls: ['routePanelControl']
    }
  }, [mapRef.current]);

  return (
    <YMaps
      // ref={qwe}
      query={{ apikey: 'b16ccf6b-dec1-421f-9d21-7ae98b1fabca' }}
    >
      <Map
        width="100%" height="400px"
        instanceRef={mapRef}
        defaultState={{
          center: [55.751574, 37.573856], zoom: 9,
          // controls: []
        }}>

        {/* <div ref={mapRef} style={{ width: '320px', height: '240px' }} />; */}
        <RoutePanel instanceRef={rp} />
      </Map>
    </YMaps>
  )
};

export default Test1;
