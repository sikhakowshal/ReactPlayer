import ReactPlayer from 'react-player'
import {Component} from 'react'

import './index.css'

class VideoPlayer extends Component {
  state = {isPlaying: false}

  onClickBtn = () => {
    this.setState(preState => ({
      isPlaying: !preState.isPlaying,
    }))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url="https://youtu.be/YE7VzlLtp-4"
            controls
            playing={isPlaying}
          />
        </div>
        <button type="button" className="button" onClick={this.onClickBtn}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default VideoPlayer
