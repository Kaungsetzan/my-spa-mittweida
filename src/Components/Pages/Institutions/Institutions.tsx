import places, {type placeProps} from "../../Cards/places.ts";
import Cards from "../../Cards/Cards.tsx";
import "../Catagories.css"




function createElement(props:placeProps) {
    return <Cards {...props}/>;
}
export default function Institutions() {
    return(
        <>

            <div className="container">
                <p className="catagories-title">Institutions</p>
                {places.filter((place)=> place.category === "Institutions").map(createElement)}
            </div>
        </>
    )
}