import React, { Component } from "react";

class GifList extends Component {
  render() {
    return (
      <div>
        {this.props.gifsArray.map(gif => {
          return (
                <img src={gif.images.original.url}></img>
          );
        })}
      </div>
    );
  }
}

export default GifList;

