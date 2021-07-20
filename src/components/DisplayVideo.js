import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'

import '../stylesheets/components/DisplayVideo.css'

class DisplayVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: ''
    }
  }

  handleYoutubeEnd = (e) => {
    e.target.playVideo();
  }

  handleYoutubeReady = (e) => {
    e.target.playVideo();
  }

  componentDidMount () {
    const videoId = this.props.url.split('v=')[1]
    this.setState({ videoId })
  }

  render() {
    const videoOptions = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1
      }
    }

    const { videoId } = this.state
    const { url } = this.props
    return (
      <div className='DisplayVideo'>
        <a href={url} className='d-block' target='_blank' rel='noopener noreferrer nofollow'>
          <div className='video-background'>
            <div className='video-foreground'>
                <YouTube
                  videoId={videoId}
                  opts={videoOptions}
                  className='video-iframe'
                  onEnd={this.handleYoutubeEnd}
                  onReady={this.handleYoutubeReady}
                />
            </div>
          </div>
        </a>
      </div>
    )
  }
}

DisplayVideo.propTypes = {
  url: PropTypes.string.isRequired
}

export default DisplayVideo
