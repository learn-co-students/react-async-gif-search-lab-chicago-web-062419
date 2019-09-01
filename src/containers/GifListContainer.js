import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";
const fetchURLOne = "http://api.giphy.com/v1/gifs/search?q=";
const fetchURLKey = "&api_key=dc6zaTOxFJmzC&rating=g";

class GifListContainer extends Component {
  state = {
    searchInput: "",
    gifResponse: []
  };

  //*   // Live Search

  //   handleSearchChange = e => {
  //     // this.setState({searchInput: e.target.value})
  //     e.persist();
  //     e.preventDefault();
  //     this.setState(prevState => {
  //       const searchTermURL = e.target.value.replace(" ", "%20");
  //       fetch(fetchURLOne + searchTermURL + fetchURLKey)
  //         .then(res => res.json())
  //         .then(data => {
  //           const firstThree = data.data.slice(0, 3);
  //           this.setState({ gifResponse: firstThree });
  //         })
  //         .catch(err => console.log(err));
  //     });
  //   };

  //*   Search on Submit
  handleSearchChange = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const searchTermURL = this.state.searchInput.replace(" ", "%20");
    fetch(fetchURLOne + searchTermURL + fetchURLKey)
      .then(res => res.json())
      .then(data => {
        const firstThree = data.data.slice(0, 3);
        this.setState({ gifResponse: firstThree });
      });
  };

  render() {
    // console.log(this.state);
    return (
      <div id="gif-container">
        <GifSearch
          handleSearchSubmit={this.handleSearchSubmit}
          handleSearchChange={this.handleSearchChange}
        />
        <GifList gifResponse={this.state.gifResponse} />
      </div>
    );
  }
}

export default GifListContainer;
