import React from "react";


function Card(props) {
    return (
    <div className={props.nameClass}>
        <h3>{props.headline}</h3>
        <p>{props.descriptionText}</p>
        <img src="" alt={props.alt} />
        
    </div>
    )
}

export default Card;