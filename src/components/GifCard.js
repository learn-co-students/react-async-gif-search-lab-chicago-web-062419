import React from "react";
import uuid from "uuid"

//* dumb component
function GifCard(props) {
  // const mappedGifs = this.props.gifResponse.map(card => {
  const card = props.card;
  return (
    <div className="card" key={uuid}>
      <h4>{card.title}</h4>
      <img src={card.images.original.url} alt="" />
    </div>
  );
}

export default GifCard;
