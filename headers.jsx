import React, { Component } from 'react';
import { render } from 'react-dom';

const handleChange = event => {
  setFormData({
    [event.target.name]: true
  })
}

class Brew extends Component {
  render() {
    return (
      <fieldset>
        <legend>Pick a brew.</legend>

        <input type='checkbox' name='coffee' onChange={handleChange}/>
        <label for='coffee'>Coffee</label>

        <input type='checkbox' name='espresso' onChange={handleChange}/>
        <label for='espresso'>Espresso</label>
      </fieldset>
    )
  }
}

class Dairy extends Component {
  render() {
    return (
      <fieldset>
        <legend>Any dairy?</legend>

        <input type='checkbox' name='steamed milk' onChange={handleChange}/>
        <label for='steamed milk'>Steamed Milk</label>

        <input type='checkbox' name='frothed milk' onChange={handleChange}/>
        <label for='frothed milk'>Frothed Milk</label>

        <input type='checkbox' name='foamed milk' onChange={handleChange}/>
        <label for='foamed milk'>Foamed Milk</label>

        <input type='checkbox' name='condensed milk' onChange={handleChange}/>
        <label for='condensed milk'>Condensed Milk</label>

        <input type='checkbox' name='cream' onChange={handleChange}/>
        <label for='cream'>Cream</label>

        <input type='checkbox' name='whipped cream' onChange={handleChange}/>
        <label form='whippedcream'>Whipped Cream</label>

        <input type='checkbox' name='ice cream' onChange={handleChange}/>
        <label for= 'ice cream'>Ice Cream</label>
      </fieldset>
    )
  }
}

class Else extends Component {
  render() {
    return (
      <fieldset>
        <legend>What else?</legend>

        <input type='checkbox' name='sugar'/>
        <label for='sugar'>Sugar</label>

        <input type='checkbox' name='alcohol'/>
        <label for='alcohol'>Alcohol</label>

        <input type='checkbox' name='water'/>
        <label for='water'>Water</label>

        <input type='checkbox' name='chocolate'/>
        <label for='chocolate'>Chocolate</label>
      </fieldset>
    )
  }
}

export { Brew, Dairy, Else };