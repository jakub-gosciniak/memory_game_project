import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import "./Game.css"; 

const Game = () => {
    const [currentlySelected, setCurrentlySelected] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [cards, setCards] = useState([]);

    //INITAL CARD SETUP
    useEffect(()=>{
        let cards = [];
        for(let i=0;i<10;i++){
            cards.push({value:i, selected:false, flipped: false})
        }
        cards = [...cards, ...cards].sort(()=> Math.random() - 0.5);
        setCards(cards)
    },[])

    //CHECK IF SELECTED CARDS MATCH
    useEffect(()=>{
        if(currentlySelected.length===2){
            console.log({currentlySelected});
            if(currentlySelected[0][0] === currentlySelected[1][0] && currentlySelected[0][1] !== currentlySelected[1][1]){
                setFlipped([...flipped,currentlySelected[0][1],currentlySelected[1][1]])
                console.log({flipped})
                setCurrentlySelected([]);
            } else {
                setTimeout(() => {
                    setCurrentlySelected([]);
                }, 1000);
            }
            
            
        }
    },[currentlySelected,flipped])

    
    //CHECK IF CARD ID IN STATE
    const isSelected = (id) => {
        for(const v of currentlySelected){
            if(v[1]===id){
                return true;
            }
        }
        return false;
    }
    
    //HANDLE VALUES FROM CHILD COMPONENT
    const onClickHandler = (value) => {
        !(currentlySelected.some(val=> {return val[1]===value[1]})) && currentlySelected.length<2 ? setCurrentlySelected([...currentlySelected, value]) : setCurrentlySelected(currentlySelected);
    }

    return (
        <div className="main-container">
            <div className="card-container">
                {flipped.length!==cards.length ? 
                cards.map((card, id) => <Card value={card.value} key={id} id={id} handleClick={onClickHandler} selected={currentlySelected.some(val=> {return val[1]===id})} flipped={flipped.includes(id)} />)
            : <h1>koniec!!!</h1>}
            </div>
        </div>
    )
}

export default Game
