import React, { useRef, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibW9zdGFmYTk5IiwiYSI6ImNreG02OHB3dTFiNzIycnFrZG1ueGFuancifQ.TJM0oZj3eSePsZPLOPiMpQ";
const Map = ({ pickup, dropoff }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (!map.current) {
      // initialize map only once

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
        center: [lng, lat],
        zoom: zoom,
      });
    }

    if (dropoff && pickup) {
      map.current.fitBounds([pickup, dropoff], { padding: 60 });
    }
    if (pickup) {
      addtoMap(map.current, pickup);
    }
    if (dropoff) {
      addtoMap(map.current, dropoff);
    }
  }, [pickup, dropoff]);

  const addtoMap = (map, coordinates) => {
    new mapboxgl.Marker()
      .setLngLat([coordinates[0], coordinates[1]])
      .addTo(map);
  };

  return <Wrapper ref={mapContainer}></Wrapper>;
};

const Wrapper = tw.div` 
    flex-1 h-1/2
`;

export default Map;
