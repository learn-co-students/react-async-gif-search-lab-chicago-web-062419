import React, { Component } from 'react';

class GifSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: "dogs"
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.query)

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" defaultValue="dogs" onChange={e => this.setState({query: e.target.value})} ></input>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default GifSearch;