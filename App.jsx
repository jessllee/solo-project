import React, { Component, useReducer, useState } from 'react';
import { render } from 'react-dom';
import { Brew, Dairy, Else } from './headers.jsx';

// import './stylesheets/styles.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.id]: event.value
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {

    const [formData, setFormData] = useReducer(formReducer, {})
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = event => {
      event.preventDefault()
      setSubmitting(true)

      setTimeout(() => {
        setSubmitting(false)
      }, 3000)
    }

    return (
      <div className='selection'>
        <form onSubmit={handleSubmit}>
          <Brew />
          <Dairy />
          <Else />
          <button type='submit'>What is My Drink?</button>
        </form>
      </div>
    )
  }
};

export default App;