import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import './locationInput.css';

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = () => {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const handleScriptLoad = (updateQuery, autoCompleteRef) => {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["address"], componentRestrictions: { country: ["id", "ph"] } }
  );
  autoComplete.setFields(["address_components", "formatted_address", "geometry"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

const handlePlaceSelect = async updateQuery => {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log({
    formatted_address: addressObject.formatted_address,
    lat: addressObject.geometry.location.lat(),
    lng: addressObject.geometry.location.lng()
  });  
  generateAddress(addressObject.geometry.location.lat(), addressObject.geometry.location.lng());
}

const generateAddress = (lat, lng) => {
  const geocoder = new window.google.maps.Geocoder();

  geocoder.geocode(
    { location: { lat: lat, lng: lng } },
    (results, status) => {
      if (status === 'OK') {
        if (results[0]) {         
          console.log(results[0]);          
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    }
  );
};

export const LocationInput = ({googleKey}) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const url = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&libraries=places`;

  useEffect(() => {
    loadScript(url,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, [googleKey, url]);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter an Address"
        value={query}
      />
    </div>
  );
}

LocationInput.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * 
   */
  googleKey: PropTypes.string.isRequired,

  label: PropTypes.string.isRequired,

  isMapEnable: PropTypes.bool,

  countries: PropTypes.array
}

LocationInput.defaultProps = {
  backgroundColor: null,
}
