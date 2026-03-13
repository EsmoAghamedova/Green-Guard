// import { useState } from "react";
// import { Link } from "react-router";
// import { MapPin, TreePine, AlertTriangle, Filter } from "lucide-react";
// import { Button } from "../components/ui/button";
// import { Badge } from "../components/ui/badge";

// interface Location {
//   id: string;
//   name: string;
//   lat: number;
//   lng: number;
//   type: "planting" | "cutting";
//   treesNeeded?: number;
//   soilType?: string;
// }

// const mockLocations: Location[] = [
//   {
//     id: "1",
//     name: "Central Park North",
//     lat: 40.7989,
//     lng: -73.9551,
//     type: "planting",
//     treesNeeded: 150,
//     soilType: "Loamy",
//   },
//   {
//     id: "2",
//     name: "Riverside Green Belt",
//     lat: 40.8045,
//     lng: -73.9654,
//     type: "planting",
//     treesNeeded: 200,
//     soilType: "Clay",
//   },
//   {
//     id: "3",
//     name: "Forest Edge - Illegal Cutting",
//     lat: 40.7892,
//     lng: -73.9445,
//     type: "cutting",
//   },
//   {
//     id: "4",
//     name: "Community Garden Area",
//     lat: 40.7955,
//     lng: -73.9512,
//     type: "planting",
//     treesNeeded: 75,
//     soilType: "Sandy loam",
//   },
// ];

// export function MapScreen() {
//   const [filter, setFilter] = useState<"all" | "planting" | "cutting">("all");

//   const filteredLocations =
//     filter === "all" ? mockLocations : mockLocations.filter((loc) => loc.type === filter);

//   return (
//     <div className="h-full flex flex-col">
//       {/* Map Area */}
//       <div className="flex-1 relative bg-gray-200 min-h-[400px]">
//         {/* Simple map placeholder with markers */}
//         <div className="w-full h-full relative overflow-hidden">
//           <div
//             className="absolute inset-0 bg-green-50"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
//               `,
//               backgroundSize: "50px 50px",
//             }}
//           >
//             {/* Mock map markers */}
//             {filteredLocations.map((location, index) => (
//               <Link
//                 key={location.id}
//                 to={`/location/${location.id}`}
//                 className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
//                 style={{
//                   left: `${25 + index * 20}%`,
//                   top: `${30 + (index % 3) * 20}%`,
//                 }}
//               >
//                 <div className="flex flex-col items-center">
//                   <div
//                     className={`p-2.5 rounded-full shadow-lg ${
//                       location.type === "planting"
//                         ? "bg-green-600 text-white"
//                         : "bg-red-600 text-white"
//                     }`}
//                   >
//                     {location.type === "planting" ? (
//                       <TreePine className="w-5 h-5" />
//                     ) : (
//                       <AlertTriangle className="w-5 h-5" />
//                     )}
//                   </div>
//                   <div className="mt-1 bg-white px-2 py-0.5 rounded shadow text-[10px] max-w-[100px] text-center">
//                     {location.name}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Filter Controls */}
//         <div className="absolute top-3 left-3 right-3 bg-white rounded-lg shadow-lg p-2 flex gap-1.5 overflow-x-auto">
//           <Button
//             size="sm"
//             variant={filter === "all" ? "default" : "outline"}
//             onClick={() => setFilter("all")}
//             className="text-xs whitespace-nowrap"
//           >
//             All
//           </Button>
//           <Button
//             size="sm"
//             variant={filter === "planting" ? "default" : "outline"}
//             onClick={() => setFilter("planting")}
//             className={`text-xs whitespace-nowrap ${filter === "planting" ? "bg-green-600 hover:bg-green-700" : ""}`}
//           >
//             <TreePine className="w-3 h-3 mr-1" />
//             Plant
//           </Button>
//           <Button
//             size="sm"
//             variant={filter === "cutting" ? "default" : "outline"}
//             onClick={() => setFilter("cutting")}
//             className={`text-xs whitespace-nowrap ${filter === "cutting" ? "bg-red-600 hover:bg-red-700" : ""}`}
//           >
//             <AlertTriangle className="w-3 h-3 mr-1" />
//             Alert
//           </Button>
//         </div>

//         {/* Action Buttons */}
//         <div className="absolute bottom-3 left-3 right-3 flex gap-2">
//           <Link to="/plant-tree" className="flex-1">
//             <Button className="w-full bg-green-600 hover:bg-green-700 shadow-lg">
//               <TreePine className="w-4 h-4 mr-1.5" />
//               Plant
//             </Button>
//           </Link>
//           <Link to="/report-cutting" className="flex-1">
//             <Button variant="destructive" className="w-full shadow-lg">
//               <AlertTriangle className="w-4 h-4 mr-1.5" />
//               Report
//             </Button>
//           </Link>
//         </div>
//       </div>

//       {/* Location List */}
//       <div className="bg-white border-t border-gray-200 max-h-[40vh] overflow-auto">
//         <div className="p-3">
//           <h2 className="text-lg font-semibold mb-3">Nearby Locations</h2>
//           <div className="space-y-2">
//             {filteredLocations.map((location) => (
//               <Link
//                 key={location.id}
//                 to={`/location/${location.id}`}
//                 className="block p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all"
//               >
//                 <div className="flex items-start justify-between mb-2">
//                   <div className="flex items-center gap-2">
//                     {location.type === "planting" ? (
//                       <TreePine className="w-4 h-4 text-green-600" />
//                     ) : (
//                       <AlertTriangle className="w-4 h-4 text-red-600" />
//                     )}
//                     <h3 className="font-medium text-sm">{location.name}</h3>
//                   </div>
//                   <Badge variant={location.type === "planting" ? "default" : "destructive"} className="text-xs">
//                     {location.type === "planting" ? "Plant" : "Alert"}
//                   </Badge>
//                 </div>
//                 {location.type === "planting" && (
//                   <div className="text-xs text-gray-600 space-y-0.5 ml-6">
//                     <p>Trees: {location.treesNeeded}</p>
//                     <p>Soil: {location.soilType}</p>
//                   </div>
//                 )}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import { TreePine, AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import "leaflet/dist/leaflet.css";

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: "planting" | "cutting";
  treesNeeded?: number;
  soilType?: string;
}

export function MapScreen() {
  const [filter, setFilter] = useState<"all" | "planting" | "cutting">("all");
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);

  const mapRef = useRef<L.Map | null>(null);

  // User location
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc: [number, number] = [
          pos.coords.latitude,
          pos.coords.longitude,
        ];
        setUserLocation(loc);

        if (mapRef.current) {
          mapRef.current.setView(loc, 13);
        }
      },
      () => {
        const fallback: [number, number] = [41.7151, 44.8271]; // Tbilisi
        setUserLocation(fallback);

        if (mapRef.current) {
          mapRef.current.setView(fallback, 13);
        }
      }
    );
  }, []);

  // Filter locations
  const filteredLocations =
    filter === "all"
      ? locations
      : locations.filter((loc) => loc.type === filter);

  return (
    <div className="h-full flex flex-col">
      
      {/* MAP */}
      <div className="flex-1 relative min-h-[400px]">

        <MapContainer
          center={userLocation ?? [41.7151, 44.8271]}
          zoom={13}
          className="absolute inset-0 z-0"
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {/* USER LOCATION */}
          {userLocation && (
            <>
              <Marker position={userLocation}>
                <Popup>Your location</Popup>
              </Marker>

              <Circle
                center={userLocation}
                radius={5000}
                pathOptions={{ color: "green", fillOpacity: 0.05 }}
              />
            </>
          )}

          {/* LOCATIONS */}
          {filteredLocations.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              icon={L.icon({
                iconUrl:
                  location.type === "planting"
                    ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
                    : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
                shadowUrl:
                  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">{location.name}</p>

                  {location.type === "planting" && (
                    <>
                      <p>Trees: {location.treesNeeded}</p>
                      <p>Soil: {location.soilType}</p>
                    </>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* FILTERS */}
        <div className="absolute top-3 left-3 right-3 bg-white rounded-lg shadow-lg p-2 flex gap-1.5 overflow-x-auto z-[1000]">
          
          <Button
            size="sm"
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="text-xs whitespace-nowrap"
          >
            All
          </Button>

          <Button
            size="sm"
            variant={filter === "planting" ? "default" : "outline"}
            onClick={() => setFilter("planting")}
            className={`text-xs whitespace-nowrap ${
              filter === "planting" ? "bg-green-600 hover:bg-green-700" : ""
            }`}
          >
            <TreePine className="w-3 h-3 mr-1" />
            Plant
          </Button>

          <Button
            size="sm"
            variant={filter === "cutting" ? "default" : "outline"}
            onClick={() => setFilter("cutting")}
            className={`text-xs whitespace-nowrap ${
              filter === "cutting" ? "bg-red-600 hover:bg-red-700" : ""
            }`}
          >
            <AlertTriangle className="w-3 h-3 mr-1" />
            Alert
          </Button>

        </div>

        {/* ACTION BUTTONS */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 z-[1000]">
          
          <Link to="/plant-tree" className="flex-1">
            <Button className="w-full bg-green-600 hover:bg-green-700 shadow-lg">
              <TreePine className="w-4 h-4 mr-1.5" />
              Plant
            </Button>
          </Link>

          <Link to="/report-cutting" className="flex-1">
            <Button variant="destructive" className="w-full shadow-lg">
              <AlertTriangle className="w-4 h-4 mr-1.5" />
              Report
            </Button>
          </Link>

        </div>
      </div>

      {/* LOCATION LIST */}
      <div className="bg-white border-t border-gray-200 max-h-[40vh] overflow-auto">

        <div className="p-3">
          <h2 className="text-lg font-semibold mb-3">Locations</h2>

          <div className="space-y-2">
            {filteredLocations.map((location) => (
              <Link
                key={location.id}
                to={`/location/${location.id}`}
                className="block p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  
                  <div className="flex items-center gap-2">
                    {location.type === "planting" ? (
                      <TreePine className="w-4 h-4 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                    )}

                    <h3 className="font-medium text-sm">
                      {location.name}
                    </h3>
                  </div>

                  <Badge
                    variant={
                      location.type === "planting"
                        ? "default"
                        : "destructive"
                    }
                    className="text-xs"
                  >
                    {location.type === "planting" ? "Plant" : "Alert"}
                  </Badge>

                </div>

                {location.type === "planting" && (
                  <div className="text-xs text-gray-600 space-y-0.5 ml-6">
                    <p>Trees: {location.treesNeeded}</p>
                    <p>Soil: {location.soilType}</p>
                  </div>
                )}

              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}