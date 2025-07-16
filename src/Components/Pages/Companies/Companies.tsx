import places, { type placeProps} from "../../Cards/places.ts";
import Cards from "../../Cards/Cards.tsx";
import "../Catagories.css"




function createElement(props:placeProps) {
    return <Cards {...props}/>;
}
export default function Companies() {
    return(
        <>

            <div className="container">
                <p className="catagories-title">Companies & Sites</p>
                {places.filter((place)=> place.category === "Companies").map(createElement)}
            </div>
        </>
    )
}