import React from "react";
import { data } from "../../helper/data";
import Card from "./Card";
import "../../scss/main.scss"

const Mains = () => {
  console.log(data);
  return (
    <div className="main">
      {data.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};

export default Mains;
