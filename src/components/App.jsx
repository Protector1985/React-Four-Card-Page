import React from "react";
import Header from "./Header";
import Card from "./Card";
import cardInfo from "../cardInfo"
import Footer from "./Footer";


function App() {
    return (
    <div>
    <div className="wrapper">
        <Header />
        <main className="main-container">
        
        <Card 
        nameClass={cardInfo[0].cardName}
        headline={cardInfo[0].headline} 
        descriptionText={cardInfo[0].desc}
        image={cardInfo[0].image}
        alt={cardInfo[0].alt}
        />
        
        <div className="column-container">
        <Card 
        nameClass={cardInfo[1].cardName}
        headline={cardInfo[1].headline} 
        descriptionText={cardInfo[1].desc}
        image={cardInfo[1].image}
        alt={cardInfo[1].alt}
        />

        <Card 
        nameClass={cardInfo[2].cardName}
        headline={cardInfo[2].headline} 
        descriptionText={cardInfo[2].desc}
        image={cardInfo[2].image}
        alt={cardInfo[2].alt}
        />
        </div>

        <Card 
        nameClass={cardInfo[3].cardName}
        headline={cardInfo[3].headline} 
        descriptionText={cardInfo[3].desc}
        image={cardInfo[3].image}
        alt={cardInfo[3].alt}
        />
        
        </main>
    </div>
    <Footer />
    </div>
    )
    
}

export default App;