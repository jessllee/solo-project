import React, { Component } from 'react';
import { render } from 'react-dom';



class Brew extends Component {
  render() {
    return (
      <fieldset id='brew'>
        <legend className='brew'>PICK A BREW</legend>

        <input type='checkbox' id='coffee' value='coffee' onChange={this.props.handleChange}/>
        <label id='coffeeLabel'>COFFEE</label>

        <input type='checkbox' id='espresso' value='espresso' onChange={this.props.handleChange}/>
        <label id='espressoLabel'>ESPRESSO</label>
      </fieldset>
    )
  }
}

class Dairy extends Component {
  render() {
    return (
      <fieldset id='dairyAll'>
        
        <legend className='dairy'>ANY DAIRY?</legend>
        <div id='dairy1'>
        <input type='checkbox' id='steamedMilk' value='steamedMilk' onChange={this.props.handleChange}/>
        <label id='steamedMilkLabel'>STEAMED MILK</label>

        <input type='checkbox' id='frothedMilk' value='frothedMilk' onChange={this.props.handleChange}/>
        <label id='frothedMilkLabel'>FROTHED MILK</label>

        <input type='checkbox' id='foamedMilk' value='foamedMilk' onChange={this.props.handleChange}/>
        <label id='foamedMilkLabel'>FOAMED MILK</label>

        <input type='checkbox' id='condensedMilk' value='condensedMilk' onChange={this.props.handleChange}/>
        <label id='condensedMilkLabel'>CONDENSED MILK</label>
        </div>


        <div id='dairy2'>
        <input type='checkbox' id='cream' value='cream' onChange={this.props.handleChange}/>
        <label id='creamLabel'>CREAM</label>

        <input type='checkbox' id='whippedCream' value='whippedCream' onChange={this.props.handleChange}/>
        <label id='whippedCreamLabel'>WHIPPED CREAM</label>

        <input type='checkbox' id='iceCream' value='iceCream' onChange={this.props.handleChange}/>
        <label id='iceCreamLabel'>ICE CREAM</label>
        </div>
      </fieldset>
    )
  }
}

class Else extends Component {
  render() {
    return (
      <fieldset id='else'>
        <legend className='else'>WHAT ELSE?</legend>

        <input type='checkbox' id='sugar' value='sugar' onChange={this.props.handleChange}/>
        <label id='sugarLabel'>SUGAR</label>

        <input type='checkbox' id='chocolate' value='chocolate' onChange={this.props.handleChange}/>
        <label id='chocolateLabel'>CHOCOLATE</label>

        <input type='checkbox' id='alcohol' value='alcohol' onChange={this.props.handleChange}/>
        <label id='alcoholLabel'>ALCOHOL</label>

        <input type='checkbox' id='water' value='water' onChange={this.props.handleChange}/>
        <label id='waterLabel'>WATER</label>
      </fieldset>
    )
  }
}

class Drink extends Component {
  render() {
    // console.log('props', this.props)
    return (
      <div>
        <ul>{this.props.drink.name}: {this.props.drink.description}</ul>
      </div>
    )
  }
}

export { Brew, Dairy, Else, Drink };