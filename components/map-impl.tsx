"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { Data } from "@/lib/dummydata";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

// Fix default Leaflet icon paths
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component to handle map view changes
function ChangeView({ items }: { items: Data[] }) {
  const map = useMap();

  useEffect(() => {
    if (items.length > 0) {
      const bounds = L.latLngBounds(items.map((item) => [item.lat, item.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
    }
  }, [items, map]);

  return null;
}

export default function MapImpl({ items }: { items: Data[] }) {
  // Center roughly on Lagos (fallback if no items)
  const center = [6.4654, 3.4064] as [number, number];

  return (
    <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={true}
        className="w-full h-full min-h-[500px] z-0"
      >
        <ChangeView items={items} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {items.map((item) => (
          <Marker
            key={item.id}
            position={[item.lat, item.lng]}
            icon={customIcon}
          >
            <Popup className="custom-popup">
              <div className="w-[200px] flex flex-col gap-2 p-1">
                <div className="relative w-full h-24 rounded-lg overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-zinc-900 leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="font-bold text-xs text-red-600 mb-2">
                    {item.price}
                  </p>
                  <Link
                    href={`/properties/${item.id}`}
                    className="flex w-full items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-zinc-900 text-white px-3 py-1.5 rounded-md hover:bg-black transition-colors"
                  >
                    View <ArrowUpRight size={10} />
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
