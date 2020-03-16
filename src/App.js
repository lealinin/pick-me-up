import React, { Component } from 'react';
// import axios from 'axios';
import RandomQuote from './RandomQuote';

class App extends Component {

  render() {
    console.log('render method runs')
    return(
      <div>
        <h1>Hello</h1>
        <RandomQuote />
      </div>
    );
  }
}



export default App;
