import React, { Component } from 'react';
import { render } from 'react-dom';



class Brew extends Component {
  render() {
    return (
      <fieldset>
        <legend>Pick a brew.</legend>

        <input type='checkbox' value='coffee' onChange={this.props.handleChange}/>
        <label for='coffee'>Coffee</label>

        <input type='checkbox' value='espresso' onChange={handleChange}/>
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

        <input type='checkbox' value='steamed milk' onChange={handleChange}/>
        <label for='steamed milk'>Steamed Milk</label>

        <input type='checkbox' value='frothed milk' onChange={handleChange}/>
        <label for='frothed milk'>Frothed Milk</label>

        <input type='checkbox' value='foamed milk' onChange={handleChange}/>
        <label for='foamed milk'>Foamed Milk</label>

        <input type='checkbox' value='condensed milk' onChange={handleChange}/>
        <label for='condensed milk'>Condensed Milk</label>

        <input type='checkbox' value='cream' onChange={handleChange}/>
        <label for='cream'>Cream</label>

        <input type='checkbox' value='whipped cream' onChange={handleChange}/>
        <label form='whippedcream'>Whipped Cream</label>

        <input type='checkbox' value='ice cream' onChange={handleChange}/>
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

        <input type='checkbox' value='sugar'/>
        <label for='sugar'>Sugar</label>

        <input type='checkbox' value='alcohol'/>
        <label for='alcohol'>Alcohol</label>

        <input type='checkbox' value='water'/>
        <label for='water'>Water</label>

        <input type='checkbox' value='chocolate'/>
        <label for='chocolate'>Chocolate</label>
      </fieldset>
    )
  }
}

export { Brew, Dairy, Else };