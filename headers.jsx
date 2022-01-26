import React from 'react';
import { render } from 'react-dom';

class Brew extends Component {
  render() {
    return (<div>Pick a brew.
      <br></br>
      <input type='checkbox'/>
      <label>Coffee</label>
      <input type='checkbox'/>
      <label>Espresso</label>
    </div>)
  }
}

class Dairy extends Component {
  render() {
    return (<div>Any dairy?
      <br></br>
      <input type='checkbox'/>
      <label>Steamed Milk</label>
      <input type='checkbox'/>
      <label>Frothed Milk</label>
      <input type='checkbox'/>
      <label>Foamed Milk</label>
      <input type='checkbox'/>
      <label>Condensed Milk</label>
      <input type='checkbox'/>
      <label>Cream</label>
      <input type='checkbox'/>
      <label>Whipped Cream</label>
      <input type='checkbox'/>
      <label>Ice Cream</label>
    </div>)
  }
}

class Else extends Component {
  render() {
    return <div>What else?
      <br></br>
      <input type='checkbox'/>
      <label>Sugar</label>
      <input type='checkbox'/>
      <label>Alcohol</label>
      <input type='checkbox'/>
      <label>Water</label>
      <input type='checkbox'/>
      <label>Chocolate</label>
    </div>
  }
}

export { Brew, Dairy, Else };