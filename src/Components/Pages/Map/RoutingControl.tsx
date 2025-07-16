// components/RoutingControl.tsx
import {useEffect} from "react";
import {useMap} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

interface RoutingControlProps {
    waypoints: [number, number][];
}

export default function RoutingControl({waypoints}: RoutingControlProps) {
    const map = useMap();

    useEffect(() => {
        if (!map || waypoints.length < 2) return;


        const routingControl = L.Routing.control({
            waypoints: waypoints.map(([lat, lng]) => L.latLng(lat, lng)),

            createMarker: function(i, wp, nWps) {
                return L.marker(wp.latLng, {
                    draggable: true,
                    icon: L.icon({
                        iconUrl: 'src/Components/Cards/Images/mapicon.png', // optional custom marker
                        iconSize: [38, 38],
                        iconAnchor: [12, 41],
                    }),
                });
            },
            routeWhileDragging: false,
            show: false,
            addWaypoints: false,
            waypointMode: "snap",
            //@ts-ignore
            draggableWaypoints: true,
            fitSelectedRoutes: true,
            showAlternatives: true,
            lineOptions: {
                styles: [
                    {
                        color: "#ff8900",
                        weight: 5,
                        opacity: 0.8,
                    },
                ],
                extendToWaypoints: false,
                missingRouteTolerance: 0
            },
        }).addTo(map);


        return () => {
            map.removeControl(routingControl);
        };
    }, [map, waypoints]);

    return null;
}
