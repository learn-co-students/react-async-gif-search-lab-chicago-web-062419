import React, { Component } from "react";

class GifSearch extends Component {
  render() {
    return (
      <div id="gif-search">
        <h1>GifSearch</h1>
        <form onSubmit={(e) => this.props.handleSearchSubmit(e)}>
            <input
            type="text"
            name="search"
            onChange={this.props.handleSearchChange}
            />
            <input type="submit" value="GIFS" />
        </form>
      </div>
    );
  }
}

export default GifSearch;
