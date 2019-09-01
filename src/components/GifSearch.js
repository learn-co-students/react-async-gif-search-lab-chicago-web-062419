import React, { Component } from "react";

class GifSearch extends Component {
  //Searh bar is responsible for knowing what the search query is
  state = {
    search: ""
  };

// This fires the function received as props from GifListContainer
// Passes the query as a param
  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.search);
  };


// Updates state upon every change to the search bar
  handleInput = event => {
    this.setState({ search: event.target.value });
  };

  // Render a search query form - onchange, fire the handleInput function and update state
  // on Submit - fire the handleSubmit function and pass the query back to the parent
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input type="text" onChange={this.handleInput} name="search" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default GifSearch;
