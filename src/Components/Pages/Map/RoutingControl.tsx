// components/RoutingControl.tsx
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// If needed, add a declaration file later to type L.Routing.createMarker properly
interface RoutingControlProps {
    waypoints: [number, number][];
}

export default function RoutingControl({ waypoints }: RoutingControlProps) {
    const map = useMap();

    useEffect(() => {
        if (!map || waypoints.length < 2) return;

        const routingControl = (L.Routing.control({
            waypoints: waypoints.map(([lat, lng]) => L.latLng(lat, lng)),

            // @ts-expect-error:
            createMarker: function (i: number, wp: any, nWps: number) {
                return L.marker(wp.latLng, {
                    draggable: true,
                    icon: L.icon({
                        iconUrl: new URL(
                            "../../Components/Cards/Images/mapicon.png",
                            import.meta.url
                        ).toString(),
                        iconSize: [38, 38],
                        iconAnchor: [12, 41],
                    }),
                });
            },

            routeWhileDragging: false,
            show: false,
            addWaypoints: false,
            waypointMode: "snap",
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
                missingRouteTolerance: 0,
            },
        }) as any).addTo(map); // ✅ Cast to any to bypass type error on `createMarker`

        return () => {
            map.removeControl(routingControl);
        };
    }, [map, waypoints]);

    return null;
}
