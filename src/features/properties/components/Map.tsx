"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import type { ChangeViewProps, EstatesMapProps } from "../types";
import { MapPin } from "lucide-react";

const customIcon = L.divIcon({
  className: "custom-map-pin",
  html: `
    <div style="transform: translate(-50%, -100%);">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    </div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});
L.Marker.prototype.options.icon = customIcon;

const ChangeView: React.FC<ChangeViewProps> = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      // map.flyTo(center, 16, { animate: true, duration: 2 });
      map.flyTo(center, 16, { animate: true } as any);
    }
  }, [center, map]);

  return null;
};

const EstatesMap: React.FC<EstatesMapProps> = ({
  mapSearch,
  markersLocations,
  zoomCoords,
}) => {
  const [center, setCenter] = useState<[number, number]>(
    markersLocations?.length > 0
      ? markersLocations[0].coords
      : [24.7136, 46.6753]
  ); // default Amman

  useEffect(() => {
    if (!mapSearch) return;

    const fetchCoords: any = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            mapSearch
          )}&countrycodes=sa&limit=1`
        );
        const data = await res.json();
        if (data.length > 0) {
          setCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        } else {
          alert("Location not found in Saudi Arabia!");
        }
      } catch (err) {
        console.error("Search failed:", err);
      }
    };

    fetchCoords();
  }, [mapSearch]);
  useEffect(() => {
    if (zoomCoords) {
      setCenter(zoomCoords); // update center when estate clicked
    }
  }, [zoomCoords]);

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
      className="h-full lg:flex md:flex hidden relative z-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* <Marker position={center}>
        <Popup>{mapSearch || "saudi"}</Popup>
      </Marker> */}

      {markersLocations?.length > 0 &&
        markersLocations?.map((loc: any, index: number) => (
          <Marker key={index} position={loc.coords}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}

      <ChangeView center={center} />
    </MapContainer>
  );
};

export default EstatesMap;
