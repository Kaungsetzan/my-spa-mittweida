import places, { type placeProps} from "../../Cards/places.ts";
import Cards from "../../Cards/Cards.tsx";
import "../Catagories.css"




function createElement(props:placeProps) {
    return <Cards {...props}/>;
}
export default function LocalArtisans() {
    return(
        <>

            <div className="container">
                <p className="catagories-title">Local artisans & Makers</p>
                {places.filter((place)=> place.category === "Artisans").map(createElement)}
            </div>
        </>
    )
}