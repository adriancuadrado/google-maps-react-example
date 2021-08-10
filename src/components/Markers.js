import React from 'react';
import { Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

function Markers() {
  const locations = useSelector(state => state.locations);
  return (
    <>
      {
        locations.map(location => 
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