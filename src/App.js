import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const libraries = ["places"];

let searchBox;
let center = {
  lat: 0,
  lng: 0
};

function App() {
  const [locations, setLocations] = useState([]);
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        options={{
            disableDefaultUI: true
        }}
      >
        {
          locations.map(location => 
            <Marker
                key={JSON.stringify(location)}
                onLoad={()=>{}}
                position={location}
            />
          )
        }
        <StandaloneSearchBox
          onLoad={(sb)=>{searchBox = sb;}}
          onPlacesChanged={()=>{
            setLocations(locations => 
              [...locations, searchBox.getPlaces()[0].geometry.location]
            );
          }}
        >
          <input
            type="text"
            placeholder="Search places..."
            style={{
              top: `50px`,
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `5px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px"
            }}
          />
        </StandaloneSearchBox>
      </GoogleMap>
    </LoadScript>
  )
}

export default App;