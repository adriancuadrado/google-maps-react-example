import React from 'react';
import { Marker } from '@react-google-maps/api';

function Markers(props) {
  return (
    <>
      {
        props.locations.map(location => 
          <Marker
              key={JSON.stringify(location)}
              onLoad={()=>{}}
              position={location}
          />
        )
      }
    </>
  );
}

export default Markers;