class Music extends React.Component {
  state = {
    play: false
  }
  
  audio = new Audio(this.props.url)

  componentDidMount() {
    audio.addEventListener('ended', () => this.setState({ play: false }));
  }
  
  componentWillUnmount() {
    audio.removeEventListener('ended', () => this.setState({ play: false }));  
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
      </div>
    );
  }
}

export default Music;