import React, { Component } from 'react';
import piggy from '../porco.png'

class Tile extends Component {

    state={
        status: "nodisplay"
    }

    handleDisplayInfo = (evt) => {
        const {status} = this.state
        // console.log(status)

        if(status === "display"){
            this.setState({
                status: "nodisplay"
            })
        }else{
            this.setState({
                status: "display"
            })
        }
    }

    render() {
        const {name, specialty, greased, weight, ['highest medal achieved']: medal} = this.props.pork

        return (

            <div onClick={this.handleDisplayInfo}>
                <img src={piggy} alt={name}/>
                <p>{name}</p>
                <p className={this.state.status}>Specialty: {specialty}</p>
                <p className={this.state.status}>Greased: {greased ? "Yes" : "No"}</p>
                <p className={this.state.status}>Weight: {weight}</p>
                <p className={this.state.status}>Medal: {medal}</p>
            </div>

        );
    }
}

export default Tile;