import React, { Component } from 'react';
import { render } from 'react-dom';
import { Brew, Dairy, Else } from './headers.jsx';

// import './stylesheets/styles.css';

class App extends Component {
  render() {
    return (
      <div className='selection'>
        <form>
          <Brew />
          <Dairy />
          <Else />
          <input type='submit' value='What is My Drink?' />
        </form>
      </div>
    )
  }
};

export default App;