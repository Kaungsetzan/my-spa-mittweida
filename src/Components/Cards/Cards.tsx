import "./cards.css";
import { Link } from "wouter";
import type { placeProps } from "./places.ts";

function ShortenText(text: string, wordLimit = 15) {
    const words = text.split(" ");
    return words.length <= wordLimit ? text : words.slice(0, wordLimit).join(" ") + "...";
}

export default function Cards(props: placeProps) {

    return (
        <Link href={`/details/${props.id}`} className="card">
            <div className="card-container">
                <div className="image-container">
                    <img className="card-image" src={props.image} alt="TENOWO" />
                </div>
                <div className="image-text">
                    <h3 className="title">{props.title}</h3>
                    <p className="card-text">
                        {ShortenText(props.about)}
                        <button className="more-info">more info</button>
                    </p>
                </div>
                <div className="distance-container">
                    <p className="distance">3km</p>
                </div>
            </div>
        </Link>
    );
}
