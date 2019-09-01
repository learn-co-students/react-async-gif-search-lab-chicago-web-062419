import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = { list: [] };
  }
  
  
      fetchGIFs = (query = "dolphins") => fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(elem => {
          this.setState({list: elem.data})
        })

        componentDidMount() {  
          this.fetchGIFs()
   }
  

  render() {

    return(<div>
     <GifSearch fetchGIFs={this.fetchGIFs} />
      <GifList gifs={this.state.list} />
      
             
          </div>)
  }

}

