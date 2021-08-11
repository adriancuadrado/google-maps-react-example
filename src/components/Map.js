import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import SearchBox from "./SearchBox";
import Markers from "./Markers";

const containerStyle = {
  width: '100%',
  height: '100%'
};

const libraries = ["places"];

let center = {
  lat: 0,
  lng: 0
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
        options={{
            disableDefaultUI: true
        }}
      >
        <Markers />
        <SearchBox />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;