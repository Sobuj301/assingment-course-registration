import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleAdCourse}) => {
    const [cards,setCards]= useState([])
    useEffect(()=>{
          fetch('Cards.json')
          .then(res => res.json())
          .then(data => setCards(data))
    },[])
    return (
        <div className="md:w-2/3 grid grid-cols-3 gap-6  max-w-7xl m-auto">
            {
                cards.map(card => <Card
                key={card.credit}
                card={card}
                handleAdCourse={handleAdCourse}
                ></Card>)
            }
        </div>
    );
};

export default Cards;