// /dashboard/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import "leaflet-geosearch/dist/geosearch.css";
// import { OpenStreetMapProvider } from 'leaflet-geosearch';

import { mapLayers } from "./mapLayers";
import { GeoSearch } from "@components/Pages/dashboard/MapArea/functions";
import { initializeTheme } from "@components/Shared/ThemeFunctions";

const MapComponent: React.FC = () => {
  const [theme, setTheme] = useState();
  // Initialize theme on mount
  useEffect(() => {
    initializeTheme(setTheme);
  }, []);

  const [activeLayer, setActiveLayer] = useState(
    mapLayers.find((layer) => layer.default)?.url || mapLayers[0].url,
  );

  return (
    <div className="relative h-full w-full">
      {/*------------- Map Container  ---------------*/}
      <MapContainer
        center={[52.52, 13.4049]}
        zoom={13}
        style={{ height: "70%", width: "100%" }}
      >
        <TileLayer url={activeLayer} />
        <GeoSearch />
        {/* ------------- Layer Options ------------- */}
        <div
          className={`absolute bottom-4 left-4 z-[1000]  shadow-lg rounded ${theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-black"
            }`}
        >
          <Select onValueChange={(value) => setActiveLayer(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a layer" />
            </SelectTrigger>
            <SelectContent
              className={`z-[1050] ${theme === "dark"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-black"
                }`}
            >
              {mapLayers.map((layer) => (
                <SelectItem key={layer.url} value={layer.url}>
                  {layer.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
