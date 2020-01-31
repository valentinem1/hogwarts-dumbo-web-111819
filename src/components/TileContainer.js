import React, { Component } from 'react';
import Tile from './Tile'

class TileContainer extends Component {

    render() {
        // console.log(this.props.porks)
        let porkObj = this.props.porks.map((pork, index) => (< Tile
        key={index}
        pork={pork}
        /> ))
            // console.log(porkObj)
        
        return (
            <div>
              {porkObj}  
            </div>
        );
    }
}

export default TileContainer;