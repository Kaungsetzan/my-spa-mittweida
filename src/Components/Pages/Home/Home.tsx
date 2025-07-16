import BackgroundImage from "../../BackgroundImage/BackgroundImage.tsx";
import SearchTool from "../../SearchTool/Search.tsx";
import places, {type placeProps} from "../../Cards/places.ts";
import Cards from "../../Cards/Cards.tsx";
import {useState} from "react";

function createElement(props:placeProps) {
    return <Cards {...props} />;
}
export default function Home(){

    const [CurrentFiltered,SetFiltered] = useState<string | null>(null);


    const displayedPlaces = CurrentFiltered
        ? places.filter((p) => p.textile === CurrentFiltered): places;



    return(
        <>
            <BackgroundImage />
            <SearchTool select={SetFiltered} results={displayedPlaces.length}/>

<div className="content-cards">
            {displayedPlaces.map(createElement)}
</div>

        </>
    )
}