import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactMapGL from "react-map-gl";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  map: {
    left: 0,
  },
}));

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
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken="pk.eyJ1IjoiemFocmExOTk3a21sIiwiYSI6ImNrZzJmbTJrbDAwZWIyd3Fua3EyMXM0bmcifQ.TRGQdEfAlXz_OAhgW-ynlA"
      />
    </>
  );
}
