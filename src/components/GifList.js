import React, { Component } from 'react';

class GifList extends Component {

    listGifs = ()=>{
        return(
            <React.Fragment>
                <li>
                    <img src={this.props.gifs[0]} alt="gif1"></img>
                </li>
                <li>
                <img src={this.props.gifs[1]} alt="gif2"></img>
                </li>
                <li>
                <img src={this.props.gifs[2]} alt="gif3"></img>
                </li>
            </React.Fragment>
        )
    }

    render() {
        
        return (
            <div>
                <ul>
                    {this.listGifs()}
                </ul>
            </div>
        );
    }
}

export default GifList;