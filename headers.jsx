import React from 'react';

class Brew extends Component {
  render() {
    return (<div>Pick a brew.
      <input type='checkbox'></input>
          <label>Coffee</label>
          <input type='checkbox'></input>
          <label>Espresso</label>
    </div>)
  }
}

class Dairy extends Component {
  render() {
    return (<div>Any dairy?
      <input type='checkbox'></input>
          <label>Steamed Milk</label>
          <input type='checkbox'></input>
          <label>Frothed Milk</label>
          <input type='checkbox'></input>
          <label>Foamed Milk</label>
          <input type='checkbox'></input>
          <label>Condensed Milk</label>
          <input type='checkbox'></input>
          <label>Cream</label>
          <input type='checkbox'></input>
          <label>Whipped Cream</label>
          <input type='checkbox'></input>
          <label>Ice Cream</label>
    </div>)
  }
}

class Else extends Component {
  render() {
    return <div>What else?
      <input type='checkbox'></input>
          <label>Sugar</label>
          <input type='checkbox'></input>
          <label>Alcohol</label>
          <input type='checkbox'></input>
          <label>Water</label>
          <input type='checkbox'></input>
          <label>Chocolate</label>
    </div>
  }
}

export { Brew, Dairy, Else };