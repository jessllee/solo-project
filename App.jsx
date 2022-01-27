import React, { Component } from 'react';
import { render } from 'react-dom';
import { Brew, Dairy, Else, Drink, Music } from './headers.jsx';

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
      url: 'https://www.youtube.com/watch?v=IssuWWx3oq4&list=PLUAsF5s_xnHv-kWX4bg5IILSoSWBEeI_H&index=5'
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
    .then(data => {
      // console.log('data', data.drinks[0])
      const arr = []
      for (let i = 0; i < data.drinks.length; i++) {
        arr.push(<Drink key={data.drinks[i]._id} drink={data.drinks[i]} />)
      }
      // console.log('arr', arr)
      this.setState({arr:[...arr]})
      // console.log('state', this.state)
      return arr
    })
    .catch(err => console.log(err))
  }

  handleChange = event => {
    if (event.target.checked) this.setState({ ...this.state, [event.target.value]: true })
    else {
      this.setState({...this.state, [event.target.value]:false})
    }
  }

  render() {
    // console.log('state', this.state) //-> state does get populated onChange
    return (
      <div className='selection'>
        <Music id='lofi' url={this.state.url} />
        <form onSubmit={this.handleSubmit}>
          <Brew handleChange={this.handleChange}/>
          <Dairy handleChange={this.handleChange}/>
          <Else handleChange={this.handleChange}/>
          <button type='submit' id='button'>What is My Drink?</button>
          <div id='drinkOrder'>
            <fieldset>
              <legend>Drink Orders</legend>
              {this.state.arr}
            </fieldset>
          </div>
        </form>
      </div>
    )
  }
};

export default App;