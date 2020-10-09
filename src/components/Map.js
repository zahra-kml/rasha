import React, { useEffect, useState } from "react";
import ReactMapGL from "react-map-gl";
import { setRTLTextPlugin } from "react-map-gl";
setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true
);
export default function Map(props) {
  const [Viewport, setViewport] = useState({
    latitude: 35.69439,
    longitude: 51.42151,
    zoom: 8,
  });

  return (
    <>
      <ReactMapGL
        {...Viewport}
        width="100%"
        height="100%"
        style={{ direction: "ltr" }}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken="pk.eyJ1IjoiemFocmExOTk3a21sIiwiYSI6ImNrZzJmbTJrbDAwZWIyd3Fua3EyMXM0bmcifQ.TRGQdEfAlXz_OAhgW-ynlA"
        mapStyle="mapbox://styles/zahra1997kml/ckg2fowao0ofb19mkaur5ub1q"
      />
    </>
  );
}
