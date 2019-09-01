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
// added "&limit=3"
// set state updating the gifsArray


  fetchGifs = (search = "cats") => {
    URL = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`;
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ gifsArray: data.data });
      });
  };

  // when component mounts, auto renders default query

  componentDidMount() {
      this.fetchGifs()
  }

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
