
import FilterBox from "./FilterBox.tsx";
import {useState} from "react";

interface SearchToolProps {
    select: (textile:string)=> void;
    results: number;
}




export default function SearchTool(props: SearchToolProps){

    const [CurrentFilterBox, SetFilterBox]= useState(false);

    const showFilterBox =()=> SetFilterBox(true);
    const hideFilterBox =()=> SetFilterBox(false);

    return(
        <div className="search-container">
            <div className="search-tool">
            <input className="search-button" type="text" placeholder="Search"/>
            <button onClick={showFilterBox} className="filter-button">Filter</button>
            </div>
            <FilterBox select ={props.select} className={ "filter-box " + (CurrentFilterBox ? "visible":"hidden")}  HideFilterBox={hideFilterBox}/>
            <div className="result">
                <p>Results({props.results})</p>
            </div>
        </div>
    )
}