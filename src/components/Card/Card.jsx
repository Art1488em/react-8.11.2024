import React from "react";
import "./Card.css";

const Card = ({ title="пока не указано" , price="Не указано" , photo="https://media.tenor.com/AGtoVuADF0YAAAAM/beer-love.gif"}) => {
  return (
    <>
      <div className="card">
        <img src={photo} alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
        <button>Купить</button>
      </div>
    </>
  );
};

export default Card;
