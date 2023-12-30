// import React from 'react';
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const LocationMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map on component mount
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    return () => {
      // Cleanup on component unmount
      map.setTarget(null);
    };
  }, []);

  return <div ref={mapRef} style={{ height: '400px' }} />;
};


export default LocationMap;