import React, { Component } from "react";
import GifCard from "./GifCard";

class GifList extends Component {
  render() {
    const mappedGifs = this.props.gifResponse.map(card => (
      <GifCard card={card} />
    ));

    return (
      <div id="gif-list-container">
        <h4>
          {mappedGifs.length > 0 ? "Da List" : "WOWZA, THERE'S NOTHING HERE?!"}
        </h4>
        <ul id="gif-list">{mappedGifs}</ul>
      </div>
    );
  }
}

export default GifList;
