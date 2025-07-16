import { MapContainer, TileLayer } from "react-leaflet";
import RoutingControl from "./RoutingControl.tsx";
import './Map.css';
import {Link} from "wouter";
import places from "../../Cards/places.ts";
import useSWR from "swr";

function useQueryParams() {
    return new URLSearchParams(window.location.search);
}

const MapPage = () => {
    const query = useQueryParams();

    const id = query.get("id");
    const userLat = query.get("userLat");
    const userLng = query.get("userLng");
    const destLat = query.get("destLat");
    const destLng = query.get("destLng");


    console.log("Query Params:", { userLat, userLng, destLat, destLng });

    if (!userLat || !userLng || !destLat || !destLng) {
        return <p>Missing location data.</p>;
    }

    const userLocation = { lat: parseFloat(userLat), lng: parseFloat(userLng) };
    const destination = { lat: parseFloat(destLat), lng: parseFloat(destLng) };

    const waypoints: [number, number][] = [
        [userLocation.lat, userLocation.lng],
        [destination.lat, destination.lng],
    ];

    const place = places.find((p) => String(p.id) === id);

    if(!place){
        return <p> Place not found!</p>
    }

    const fetcher = (url: string) => fetch(url).then(res => res.json());
    const backendUrl = 'http://172.17.214.206:3000';
    const { data: reviews, error, isLoading } = useSWR(`${backendUrl}/review`, fetcher);
    return (
        <div className="Map">
            <h2 className="map-title">{place.title}</h2>
            <MapContainer center={destination} zoom={13} style={{height: '55%'}}>
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RoutingControl waypoints={waypoints}/>
            </MapContainer>
            <Link href="/login" className="favourites">Add to favourites</Link>

            <div className="review-container">
                <div className="line-design-map"></div>
                <h3 className="review-title">Reviews</h3>
                <Link href="/review" className="leave-review">Leave a review</Link>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error loading reviews</p>}

                <ul className="reviews-list-map">
                    {reviews?.map((r: any) => (
                        <li className="map-reviews" key={r.id}><h4>{r.name}</h4>{r.content}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MapPage;
