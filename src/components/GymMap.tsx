import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🔧 Fix necesario para que los iconos funcionen en React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const CustomIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface GymMapProps {
  lat: number;
  lng: number;
  name: string;
  address: string;
}

export default function GymMap({ lat, lng, name, address }: GymMapProps) {
  const position: [number, number] = [lat, lng];

  // TILES OSCUROS GRATUITOS (CartoDB Dark Matter) → SIN API KEY
  const darkTiles =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  return (
    <div className="map-wrapper">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100%", width: "100%", borderRadius: "12px" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url={darkTiles}
        />
        <Marker position={position} icon={CustomIcon}>
          <Popup>
            <strong>{name}</strong>
            <br />
            <span style={{ fontSize: "12px", opacity: 0.8 }}>{address}</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
