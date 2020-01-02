import React from "react";
import supervisor from "./icon-supervisor.svg"


function Card(props) {
    const [isHovered, setHover] = React.useState(false);
    
    const hoveredColor = "#ededed";
    
    function handleHover() {
        setHover(true);
        
    }

    function handleOut() {
        setHover(false);
    }
    
    
    return (
    <div 
    onMouseOver={handleHover} 
    onMouseOut={handleOut} 
    style={{backgroundColor: isHovered ? hoveredColor : "white"}} 
    className={props.nameClass}>
        <h3>{props.headline}</h3>
        <p>{props.descriptionText}</p>
        <img src={props.image} alt={props.alt} />
        
    </div>
    )
}

export default Card;