import React from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

let standaloneSearchBox;

function SearchBox(props) {
  return (
    <StandaloneSearchBox
      onLoad={(ssb)=>{standaloneSearchBox = ssb;}}
      onPlacesChanged={()=>{
        props.setLocations(locations => 
          [...locations, standaloneSearchBox.getPlaces()[0].geometry.location]
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
  );
}

export default SearchBox;