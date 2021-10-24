import React from "react";
import {useSpring, animated} from "react-spring";


function Card(props) {
    const [isHovered, setHover] = React.useState(false);
    
    const animation = useSpring({
        backgroundColor: isHovered ? "#ededed" : "white"
    });
    
    
    function handleHover() {
        setHover(true);
        
    }

    function handleOut() {
        setHover(false);
    }
    
  
    return (
    <animated.div 
        onMouseOver={handleHover} 
        onMouseOut={handleOut} 
        style={animation}
        className={props.nameClass}>
            <h3>{props.headline}</h3>
            <p>{props.descriptionText}</p>
            <img src={props.image} alt={props.alt} />

    </animated.div> 
    
    )
}

export default Card;