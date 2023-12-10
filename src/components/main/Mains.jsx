import React from "react";
import { data } from "../../helper/data";
import Card from "./Card";

const Mains = () => {
  console.log(data);
  return (
    <>
      {data.map((item, i) => (
        <Card key={i} {...item} />
      ))}

    </>
  );
};

export default Mains;
