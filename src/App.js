import React, { Component } from "react";
import { CardList } from './components/card-list/card-list.component';

import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state =  {
      perretes: []
    }

  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breed/hound/images')
    .then(response => response.json())
    .then(perretes => {
      this.setState({ perretes: perretes.message})
      console.log(perretes)
    })
   }

  render() {
    return (
      <div className="App">
        <h1>Test curso React - Perretes - </h1>
        <CardList perros = {this.state.perretes} />
      </div>
    );
  }
}

export default App;
