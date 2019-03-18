import React from "react";
import "./style.css";

function Card(props) {
  return (

    <div className="inner-card d-flex">
        <div onClick={() => props.checkGuess(props.id)} className="img-container">
            <img alt={""} src={props.image} />
        </div>
    </div>
  );
}

export default Card;
