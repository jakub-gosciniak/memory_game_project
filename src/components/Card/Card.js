import React from 'react';
import "./Card.css";

const Card = ({value,id, flipped, selected, handleClick}) => {

    const returnSelected = () => {
        handleClick([value,id])
    }

    return (
        < >
        {flipped ? 
        <div className="square-flipped squares" >
            <h3>{value}</h3>
        </div> : 
        <div data-testid={"btn"} onClick={()=>returnSelected()} className={`square squares ${selected ? "square-selected" : ''}`} >
            {selected ? 
            <h3>{value}</h3> : 
            <h2>?</h2>}
        </div>}
        </>
    )
}

export default Card;
