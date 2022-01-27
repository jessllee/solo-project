import React, { Component } from 'react';
import { render } from 'react-dom';



class Brew extends Component {
  render() {
    return (
      <fieldset>
        <legend>Pick a brew.</legend>

        <input type='checkbox' id='coffee' value='coffee' onChange={this.props.handleChange}/>
        <label htmlFor='coffee'>Coffee</label>

        <input type='checkbox' id='espresso' value='espresso' onChange={this.props.handleChange}/>
        <label htmlFor='espresso'>Espresso</label>
      </fieldset>
    )
  }
}

class Dairy extends Component {
  render() {
    return (
      <fieldset>
        <legend>Any dairy?</legend>

        <input type='checkbox' id='steamedMilk' value='steamedMilk' onChange={this.props.handleChange}/>
        <label htmlFor='steamedMilk'>Steamed Milk</label>

        <input type='checkbox' id='frothedMilk' value='frothedMilk' onChange={this.props.handleChange}/>
        <label htmlFor='frothedMilk'>Frothed Milk</label>

        <input type='checkbox' id='foamedMilk' value='foamedMilk' onChange={this.props.handleChange}/>
        <label htmlFor='foamedMilk'>Foamed Milk</label>

        <input type='checkbox' id='condensedMilk' value='condensedMilk' onChange={this.props.handleChange}/>
        <label htmlFor='condensedMilk'>Condensed Milk</label>

        <input type='checkbox' id='cream' value='cream' onChange={this.props.handleChange}/>
        <label htmlFor='cream'>Cream</label>

        <input type='checkbox' id='whippedCream' value='whippedCream' onChange={this.props.handleChange}/>
        <label htmlForm='whippedCream'>Whipped Cream</label>

        <input type='checkbox' id='iceCream' value='iceCream' onChange={this.props.handleChange}/>
        <label htmlFor= 'iceCream'>Ice Cream</label>
      </fieldset>
    )
  }
}

class Else extends Component {
  render() {
    return (
      <fieldset>
        <legend>What else?</legend>

        <input type='checkbox' id='sugar' value='sugar' onChange={this.props.handleChange}/>
        <label htmlFor='sugar'>Sugar</label>

        <input type='checkbox' id='chocolate' value='chocolate' onChange={this.props.handleChange}/>
        <label htmlFor='chocolate'>Chocolate</label>

        <input type='checkbox' id='alcohol' value='alcohol' onChange={this.props.handleChange}/>
        <label htmlFor='alcohol'>Alcohol</label>

        <input type='checkbox' id='water' value='water' onChange={this.props.handleChange}/>
        <label htmlFor='water'>Water</label>
      </fieldset>
    )
  }
}

export { Brew, Dairy, Else };