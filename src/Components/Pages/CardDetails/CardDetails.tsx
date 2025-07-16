import { FaAngleLeft } from "react-icons/fa6";
import { useParams } from "wouter";
import { useLocation } from "wouter";
import places from "../../Cards/places.ts";
import "./CardDetails.css";

export default function CardDetails() {
    const [, setLocation] = useLocation();
    const params = useParams();
    const { id } = params;

    const place= places.find((p) => String(p.id) === id);


    if (!place) {
        return <p>Place not found.</p>;
    }


    const handleGetDirections = () => {
        // if (!navigator.geolocation) {
        //     alert("Geolocation is not supported by your browser.");
        //     return;
        // }

        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
                // const userLocation = {
                //     lat: position.coords.latitude,
                //     lng: position.coords.longitude,
                // };

                if (!place?.coords || place.coords.length !== 2) {
                    alert("No coordinates available for this place.");
                    return;
                }

                const destination = {
                    lat: place.coords[0],
                    lng: place.coords[1],
                };

                // Navigate using Wouter with query parameters
                setLocation(
                    `/map?id=${place.id}&userLat=50.9853&userLng=12.9741&destLat=${destination.lat}&destLng=${destination.lng}`
                );
            }





    return (
        <div className="card-details-page">
            <div className="back" onClick={() => window.history.back()}>
                <button className="back-button" >
                    <FaAngleLeft className="back-icon" />

                </button>
                <div className="back-category"> {place.category}</div>
            </div>
            <p className="detail-title">{place.title}</p>
            <div className="card-detail-container">
                <div className="details-container">
                    <div className="image-container">
                        <img className="card-image" src={place.image} alt={place.title} />
                    </div>
                    <div className="detail-text">
                        <p className="card-text">
                            <strong>Overview:</strong> {place.about}
                            <br />
                            <strong>Location:</strong> {place.location}
                        </p>
                        <button className="direction-button" onClick={handleGetDirections}>
                            Get Directions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
