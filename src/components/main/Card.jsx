import React from 'react'

const Card = ({title,date,desc,id,image}) => {
  return (
    <div>
      <div> {title} </div>
      <div> {date} </div>
      <div> {desc} </div>

      <div>
        <img src={image} alt="" width={"400px"} />
      </div>
    </div>
  );
}

export default Card