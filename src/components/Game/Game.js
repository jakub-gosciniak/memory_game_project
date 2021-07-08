import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import "./Game.css"; 

const Game = () => {
    const [currentlySelected, setCurrentlySelected] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [cards, setCards] = useState([]);

    //INITAL CARD SETUP
    const createCards= () => {
        let cards = [];
        for(let i=0;i<10;i++){
            cards.push({value:i})
        }
        cards = [...cards, ...cards].sort(()=> Math.random() - 0.5);
        setCards(cards)
        return cards
    }

    useEffect(()=>{
        createCards();
    },[])

    //CHECK IF SELECTED CARDS MATCH AND SET ACCORDING STATES
    useEffect(()=>{
        if(currentlySelected.length===2){
            if(currentlySelected[0][0] === currentlySelected[1][0] && currentlySelected[0][1] !== currentlySelected[1][1]){
                setFlipped([...flipped,currentlySelected[0][1],currentlySelected[1][1]])
                setCurrentlySelected([]);
                
            } else {
                setTimeout(() => {
                    setCurrentlySelected([]);
                }, 1000);
            }
            
            
        }
    },[currentlySelected,flipped])

    
    //HANDLE VALUES FROM CHILD COMPONENT
    const onClickHandler = (value) => {
        !(currentlySelected.some(val=> {return val[1]===value[1]})) && currentlySelected.length<2 ? setCurrentlySelected([...currentlySelected, value]) : setCurrentlySelected(currentlySelected);
    }

    const restartGame = () => {
        createCards();
        setFlipped([]);
        setCurrentlySelected([]);
    }



    return (
        <div className="main-container">
            <div className="card-container">
                {flipped.length===cards.length && cards.length!==0? 
                <div className="end-screen">
                <h1>Go again?</h1>
                    <button onClick={()=>{restartGame()}}>Start</button>
                </div>
            : cards.map((card, id) => <Card value={card.value} key={id} id={id} data-testid="0" handleClick={onClickHandler} selected={currentlySelected.some(val=> {return val[1]===id})} flipped={flipped.includes(id)} />)}
            </div>
        </div>
    )
}

export default Game
