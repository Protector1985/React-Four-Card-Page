import React from "react";
import {useSpring, animated} from "react-spring"

function Header() {
    const fadeIn = useSpring({
      from: {opacity: 0},
      to: {opacity:1},
      delay: 3500,
      config: {
      friction: 100
      }
    });
    
    return (
    <animated.div style={fadeIn} className="header">
      <h1 id="headline">Reliable, efficient delivery</h1>
      <h1 id="headline2">Powered by Technology</h1>
      <p>Our Artificial Intelligence powered tools use millions of project data points
        to ensure that your project is successful</p>
    </animated.div>
    )
}

export default Header;