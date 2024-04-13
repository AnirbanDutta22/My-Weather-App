import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import React from "react";
import loactionIcon from "../../assets/icons/location.png";

export default function MapContainer(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });
  const myRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    myRef.current = map;
  }, []);

  if (!isLoaded) return "maps";
  if (loadError) return "error occurred";
  // console.log(props.cood);
  return (
    <div style={{ marginLeft: "30px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "86vh",
          borderRadius: "16px",
        }}
        center={props.cood}
        zoom={10}
        onLoad={onMapLoad}
      >
        <MarkerF
          position={props.cood}
          icon={{
            url: loactionIcon,
            scaledSize: (15, 25),
          }}
        ></MarkerF>
      </GoogleMap>
    </div>
  );
}
