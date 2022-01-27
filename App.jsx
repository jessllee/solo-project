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
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit = event => {
    event.preventDefault()
    fetch('/', {
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify(this.state),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('ERROR'))
  }

  handleChange = event => {
    this.setState({ ...this.state, [event.target.value]: true })
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