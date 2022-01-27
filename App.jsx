import React, { Component } from 'react';
import { render } from 'react-dom';
import { Brew, Dairy, Else } from './headers.jsx';

// import './stylesheets/styles.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // coffee: false,
      // espresso: false,
      // steamedMilk: false,
      // frothedMilk: false,
      // foamedMilk: false,
      // condensedMilk:false,
      // cream: false,
      // whippedCream: false,
      // iceCream: false,
      // sugar: false,
      // alcohol: false,
      // water: false,
      // chocolate: false
    }
  }
  
  handleSubmit = () => {
    //SEND POST REQUEST??
  }

  handleChange = bool => {
    this.setState({})
  }

  render() {
    
    return (
      <div className='selection'>
        <form onSubmit={this.handleSubmit}>
          <Brew handleChange={this.handleChange}/>
          <Dairy handleChange={this.handleChange}/>
          <Else handleChange={this.handleChange}/>
          <button type='submit'>What is My Drink?</button>
        </form>
      </div>
    )
  }
};

export default App;