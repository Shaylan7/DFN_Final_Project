import * as React from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const containerStyle = {
  position: "relative",
  height: "100%",
  width: "100%",
};

const style = {
  width: "100%",
  height: "100%",
};

const MapContainer = (props) => {
  const [selectedSite, setSelectedSite] = React.useState(null);
  console.log("hello", selectedSite);
  //   selectedSite.name
  //     ? console.log("hi", selectedSite.name)
  //     : console.log("nothing");

  return (
    <Map
      google={props.google}
      initialCenter={{
        lat: 47.6062,
        lng: -122.3321,
      }}
      zoom={10}
      resetBoundsOnResize={true}
      containerStyle={containerStyle}
      style={style}
    >
      {props.distance.slice(0, 3).map((element) => {
        let latitude = element.latitude;
        let longitude = element.longitude;

        return (
          <Marker
            name={element.name}
            position={{ lat: latitude, lng: longitude }}
            onClick={() => {
              setSelectedSite(element);
            }}
          />
        );
      })}
      {selectedSite && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedSite(null);
          }}
          position={{
            lat: parseFloat(selectedSite.latitude),
            lng: parseFloat(selectedSite.longitude),
          }}
        >
          <div>
            {selectedSite.name}
            hello
          </div>
        </InfoWindow>
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);
