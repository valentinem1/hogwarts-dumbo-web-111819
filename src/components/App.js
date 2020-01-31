import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TileContainer from './TileContainer'
import Form from './Form.js'

class App extends Component {

  state = {
    porks: hogs,
    greased: false,
    name: false
  }

  displayGreased = (checked) => {
      this.setState({
      greased: checked
      })
  }

  filteredGreased = () => {
   let arrayOfGreased = this.state.porks.filter(pork => {
    //  let greased = pork.greased
      let {greased} = pork
      // console.log('hello', greased)
      let greasedPork = this.state.greased
      return greased === greasedPork
    })
    return arrayOfGreased
  }

  displayAlphabeticNames = (checked) => {
    this.setState({
      name: checked
    })
  }

  sortNames = () => {
    let arrayOfNames = this.state.porks.sort((pork1, pork2) => {
      pork1 - pork2
    })

  }
    
    
  render() {
    // console.log(this.state.porks)
    return (
      <div className="App">
          < Nav />
          < Form 
            name={this.state.name}
            displayAlphabeticNames={this.displayAlphabeticNames}
            greased={this.state.greased}
            displayGreased={this.displayGreased}/>
          < TileContainer 
          porks={this.filteredGreased()}
          porksName={this.sortNames()}
          />
      </div>
    )
  }
}

export default App;
