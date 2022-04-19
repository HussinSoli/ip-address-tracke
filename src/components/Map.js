import React from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useData } from "./data-context";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function Map() {
  const { userData } = useData();
  const position = [Number(userData.lat), Number(userData.lng)];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <ChangeView center={position} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
