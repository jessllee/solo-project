import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
// import ReactAudioPlayer from 'react-audio-player'
// import { Howl } from 'howler



class Brew extends Component {
  render() {
    return (
      <fieldset id='brew'>
        <legend>Pick a brew.</legend>

        <input type='checkbox' id='coffee' value='coffee' onChange={this.props.handleChange}/>
        <label>Coffee</label>

        <input type='checkbox' id='espresso' value='espresso' onChange={this.props.handleChange}/>
        <label>Espresso</label>
      </fieldset>
    )
  }
}

class Dairy extends Component {
  render() {
    return (
      <fieldset id='dairy'>
        <legend>Any dairy?</legend>

        <input type='checkbox' id='steamedMilk' value='steamedMilk' onChange={this.props.handleChange}/>
        <label>Steamed Milk</label>

        <input type='checkbox' id='frothedMilk' value='frothedMilk' onChange={this.props.handleChange}/>
        <label>Frothed Milk</label>

        <input type='checkbox' id='foamedMilk' value='foamedMilk' onChange={this.props.handleChange}/>
        <label>Foamed Milk</label>

        <input type='checkbox' id='condensedMilk' value='condensedMilk' onChange={this.props.handleChange}/>
        <label>Condensed Milk</label>

        <input type='checkbox' id='cream' value='cream' onChange={this.props.handleChange}/>
        <label>Cream</label>

        <input type='checkbox' id='whippedCream' value='whippedCream' onChange={this.props.handleChange}/>
        <label>Whipped Cream</label>

        <input type='checkbox' id='iceCream' value='iceCream' onChange={this.props.handleChange}/>
        <label>Ice Cream</label>
      </fieldset>
    )
  }
}

class Else extends Component {
  render() {
    return (
      <fieldset id='else'>
        <legend>What else?</legend>

        <input type='checkbox' id='sugar' value='sugar' onChange={this.props.handleChange}/>
        <label>Sugar</label>

        <input type='checkbox' id='chocolate' value='chocolate' onChange={this.props.handleChange}/>
        <label>Chocolate</label>

        <input type='checkbox' id='alcohol' value='alcohol' onChange={this.props.handleChange}/>
        <label>Alcohol</label>

        <input type='checkbox' id='water' value='water' onChange={this.props.handleChange}/>
        <label>Water</label>
      </fieldset>
    )
  }
}

class Drink extends Component {
  render() {
    // console.log('props', this.props)
    return (
      <div>
        <p>{this.props.drink.name}: {this.props.drink.description}</p>
      </div>
    )
  }
}


// const useAudio = url => {
//   const [audio] = useState(new Audio(url))
//   const [playing, setPlaying] = useState(false)

//   const toggle = () => setPlaying(!playing)

//   useEffect(() => {
//     playing ? audio.play() : audio.pause()
//   },
//   [playing]
//   )

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false))
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false))
//     }
//   }, [])
//   return [playing, toggle]
// }

// const Music = ({ url }) => {
//   const [playing, toggle] = useAudio(url)
//   return (
//     <div>
//       <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
//     </div>
//   )
// }


class Music extends Component {
  state = {
    play: false
  }
  audio = new Audio(this.props.url)

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }))
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }))
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause()
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play' }</button>
      </div>
    )
  }
}



export { Brew, Dairy, Else, Drink, Music };