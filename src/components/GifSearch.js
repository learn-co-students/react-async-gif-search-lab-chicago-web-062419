import React, { Component } from 'react';

class GifSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state.query)
        this.setState({
            query: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="query" type="text" value={this.state.query} onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default GifSearch;