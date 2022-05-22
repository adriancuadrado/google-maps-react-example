import React from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { addLocation } from "../features/locations/locationsSlice";
import '../App.css';

let standaloneSearchBox;

function SearchBox() {
  const dispatch = useDispatch();
  return (
    <StandaloneSearchBox
      onLoad={ssb => standaloneSearchBox = ssb}
      onPlacesChanged={() => {
        dispatch(
          addLocation(
            standaloneSearchBox
            .getPlaces()[0]
            .geometry
            .location
          )
        );
      }}
    >
      <input
        type="text"
        placeholder="Search places..."
        className="searchbox"
      />
    </StandaloneSearchBox>
  );
}

export default SearchBox;