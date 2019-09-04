import React, { Component } from 'react';

class GifList extends Component {

    makeLi = () => {
        return this.props.gifs.map(gif => {
            return <li><img src={gif} alt={"hi"}></img></li>
        })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.makeLi()}
                </ul>
            </div>
        );
    }
}

export default GifList;