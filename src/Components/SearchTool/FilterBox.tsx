import {IoClose} from "react-icons/io5";
import "./searchTool.css"




export default function FilterBox(props){

const selectTextile = (textile:string)=>{
    props.select(textile);
    props.HideFilterBox();
};
    return(
        <div className={props.className}>
            <IoClose onClick={props.HideFilterBox} className="filter-close-icon"/>
            <div className="filter-container">
                <div className="filter-items">
            <p>Select the specific textile</p>
                    <div className="filter-circle"></div>
                    <div className="filter-line"></div>
                </div>
            <ul>
                <li className="filter-item"><a onClick={()=> selectTextile("Nonwovens")} className="filter-links" >Nonwovens</a></li>
                <li className="filter-item"><a onClick={()=> selectTextile("Leather")} className="filter-links" >Leather</a></li>
                <li className="filter-item"><a onClick={()=> selectTextile("Wool")} className="filter-links" >Wool</a></li>
            </ul>


            </div>
        </div>
    )
}