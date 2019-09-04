import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: [],
        }
    }

    componentDidMount(){
        this.fetchGifs()
    }

    fetchGifs = (query = "hello") => {
        fetch('http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(gifsArray => this.filterGifsAndSetState(gifsArray))
    }


    filterGifsAndSetState = (array) => {
        this.setState({
            gifs: array.data.slice(0, 3).map(gif => gif.images.original.url)
        })
        
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <GifSearch handleSubmit={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }
}

export default GifListContainer;