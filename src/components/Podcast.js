import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import '../stylesheets/components/Podcast.css'

class Podcast extends Component {
  render () {
    const { title = '', src = '', art = '', indent = 0, width = 100 } = this.props
    return (
      <div className={`Podcast${indent ? ` indent-${indent}` : ''}${width ? ` w${width}` : 'w100'}`}>
        {art && <img src={art} alt={title} />}
        <div className='player-wrap'>
          {title && <h3>{title}</h3>}
          {src && !/admin/i.test(window.location.pathname) && <ReactAudioPlayer
            src={src}
            className={'podcast-player'}
            controls
            autoPlay={false}
          />}
          {src && /admin/i.test(window.location.pathname) && <audio className='podcast-player' controls>
              <source src={src} type='audio/mp3' />
              Your browser does not support the audio element.
          </audio>}
        </div>
      </div>
    )
  }
}

export default Podcast
