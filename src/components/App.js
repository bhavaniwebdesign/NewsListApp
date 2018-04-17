import React, { Component } from 'react';
import News from './news/News.js';

class App extends Component {
  render() {
    return (

      <div className="container">
      <h1>News stories</h1>
      <News/>
      </div>

    );
  }
}

export default App;
