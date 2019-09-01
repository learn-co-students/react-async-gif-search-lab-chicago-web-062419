import React, { Component } from "react";

// Import Children
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {

// Did not create a constructor, so simply defined state with a gifsArray 
  state = {
    gifsArray: []
  };


// fetchGifs method takes in a parameter which will be passed up from the Gif Search child. 
// Interpolate the query into the link
// slice the fetch data to only return first 3 results
// set state updating the gifsArray

  fetchGifs = search => {
    URL = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`;
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        let array = data.data.slice(0, 3);
        this.setState({ gifsArray: array });
      });
  };

  //Render the children and passing through fetchGifs and gifsArray as props to the children

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifsArray={this.state.gifsArray} />
      </div>
    );
  }
}

export default GifListContainer;
