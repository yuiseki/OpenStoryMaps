import React, { useRef, useEffect, useState } from "react";
import { Map, NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const StaticMap: React.FC<{
  longitude: number;
  latitude: number;
  zoom: number;
  style?: string;
}> = ({
  longitude,
  latitude,
  zoom,
  style = "https://tile.openstreetmap.jp/styles/osm-bright/style.json",
}) => {
  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: zoom,
      }}
      cursor="default"
      doubleClickZoom={false}
      dragRotate={false}
      dragPan={false}
      keyboard={false}
      scrollZoom={false}
      touchPitch={false}
      touchZoomRotate={false}
      style={{
        display: "block",
        width: "100%",
        height: "25vh",
      }}
      mapStyle={style}
    >
      <NavigationControl position="bottom-right" />
    </Map>
  );
};
