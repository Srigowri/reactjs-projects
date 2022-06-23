import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img src={`images/${props.img}`} alt={props.place} />
            <div className="card--info">
                <div className="card--header">
                    <FontAwesomeIcon className="card--map" icon={faMapMarker} />
                    <span className="card--country">{props.country.toUpperCase()}</span>
                    <span className="card--googleMaps"><a href={props.googleMaps}>View on Google Maps</a></span>
                </div>
                <h1>{props.place}</h1>
                <strong>{props.startDate}-{props.endDate}</strong>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}

