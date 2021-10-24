import React from "react";
import Header from "./Header";
import Card from "./Card";
import cardInfo from "../cardInfo"
import Footer from "./Footer";
import {useSpring, animated} from "react-spring";


function App() {
    
    const slideInTop = useSpring ({
        from: {marginTop: -3500},
        to: {marginTop: 0},
        delay:2000,
        config: {
            tension:450,
        }
        
    })

    const slideInBottom = useSpring ({
        from: {marginTop: -3000},
        to:  {marginTop: 0},
        delay:2500,
        config: {
            tension:450,
        }
        
    })
    
    const slideInLeft = useSpring ({
        from: {marginTop: -1500},
        to:  {marginTop: 0},
        delay:1500,
        config: {
            tension:450,
        }
        
    })
    
    const slideInRight = useSpring ({
        from: {marginTop: -1500},
        to: {marginTop: 0},
        delay:3000,
        config: {
            tension:450,
        }
        
    })

    
    return (
    <div>
    <div className="wrapper">
        <Header />
        <main className="main-container">
        
        <div className="slideInSlot cardOne">
        <animated.div style={slideInLeft}>
        <Card 
            nameClass={cardInfo[0].cardName}
            headline={cardInfo[0].headline} 
            descriptionText={cardInfo[0].desc}
            image={cardInfo[0].image}
            alt={cardInfo[0].alt}
                
            />
        </animated.div>
        </div>
        

        
        <div className="column-container">
        <div className="slideInSlot cardTwo">
        <animated.div style={slideInTop}>
        <Card nameClass={cardInfo[1].cardName}
        headline={cardInfo[1].headline} 
        descriptionText={cardInfo[1].desc}
        image={cardInfo[1].image}
        alt={cardInfo[1].alt}
        />
        </animated.div>
        </div>
        
        <div className="slideInSlot cardThree">
        <animated.div style={slideInBottom}>
        <Card 
        nameClass={cardInfo[2].cardName}
        headline={cardInfo[2].headline} 
        descriptionText={cardInfo[2].desc}
        image={cardInfo[2].image}
        alt={cardInfo[2].alt}
        />
        </animated.div>
        </div>
        
    
        </div>
        <div className="slideInSlot cardFour">
        <animated.div style={slideInRight}>
        <Card 
        nameClass={cardInfo[3].cardName}
        headline={cardInfo[3].headline} 
        descriptionText={cardInfo[3].desc}
        image={cardInfo[3].image}
        alt={cardInfo[3].alt}
        />
        </animated.div>
        </div>
        
        </main>
    </div>
    <Footer />
    </div>
    )
    
}

export default App;