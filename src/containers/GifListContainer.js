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
        this.getGifs()
    }

    getGifs = (query)=>{
       fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => this.setThreeGifs(json))
    }

    setThreeGifs = (json)=>{
        const threeGifs = json.data.slice(0,3)
        const gifArray = []
        threeGifs.forEach(gifJson => {
            gifArray.push(gifJson.images.original.url)
        })
        this.setState({gifs: gifArray})
    }

    render() {
        console.log(this.state)
        return (
            <div>
               <GifList gifs={this.state.gifs} />
               <GifSearch fetchGifs={this.getGifs}/>
            </div>
        );
    }
}

export default GifListContainer;