import React from "react";
import supervisor from "./icon-supervisor.svg"


function Card(props) {
    return (
    <div className={props.nameClass}>
        <h3>{props.headline}</h3>
        <p>{props.descriptionText}</p>
        <img src={props.image} alt={props.alt} />
        
    </div>
    )
}

export default Card;