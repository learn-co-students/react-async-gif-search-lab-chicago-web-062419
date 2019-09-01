import React, { Component } from "react";

class GifList extends Component {
  render() {
    return (
      <div>
        {this.props.gifsArray.map(gif => {
          return (
            <ul>
              <li>
                <img src={gif.images.original.url}></img>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default GifList;

