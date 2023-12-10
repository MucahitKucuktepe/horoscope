import React from "react";
import "../../scss/card.scss"

const Card = ({ title, date, desc, id, image }) => {
  return (
    <div className="card">
      <img src={image} alt="" width={"400px"} />
      <div className="title"> {title} </div>
      <div className="date"> {date} </div>
      <div className="desc"> {desc} </div>
    </div>
  );
};

export default Card;
