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
    console.log('in handleSubmit')
    console.log('state', this.state)
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...this.state})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  handleChange = event => {
    this.setState({ ...this.state, [event.target.value]: true })
  }

  render() {
    // console.log('state', this.state) //-> state does get populated onChange
    return (
      <div className='selection'>
        <form onSubmit={this.handleSubmit}>
          <Brew handleChange={this.handleChange}/>
          <Dairy handleChange={this.handleChange}/>
          <Else handleChange={this.handleChange}/>
          <button type='submit' id='button'>What is My Drink?</button>
        </form>
      </div>
    )
  }
};

export default App;