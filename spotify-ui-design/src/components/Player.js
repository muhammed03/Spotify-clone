import React from 'react'
import shuffle from "../images/icons/shuffle.png"
import previous from "../images/icons/previous.png"
import play from "../images/icons/play.png"
import pause from "../images/icons/pause.png"
import next from "../images/icons/next.png"
import repeat from "../images/icons/repeat.png"
import volume from "../images/icons/volume.png"

const Player = () => {
    var audio = new Audio('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3');

    let state = false
    function handleClick() {
        if (state == false){
            audio.play()
            state = true
        } else {
            audio.pause()
            state = false
        }
    }
    
    return (
        <div className="musicControls">
            <div className="playingBar">
                <div className="nowPlaiyngLeft">
                    <div className="player-content">
                        <span className="albumLink">
                            <img className="albumArtWork" src="https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" />
                        </span>

                        <div className="trackInfo">
                            <span className="trackName">
                                <span>Track Name</span>
                            </span>

                            <span className="artistName">
                                <span>Track Author</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="nowPlaiyngCenter">
                    <div className="player-content player-controls">
                        <div className="player-buttons">
                            <button className="control-button shuffle">
                                <img src={shuffle} alt="shuffle" />
                            </button>
                            <button className="control-button previous">
                                <img src={previous} alt="previous" />
                            </button>
                            <button className="control-button play" onClick={() => handleClick()}>
                                <img className="audio-control" src={play} alt="play" />
                            </button>
                            <button className="control-button pause" onClick={() => handleClick()}>
                                <img className="audio-control" src={pause} alt="pause" />
                            </button>
                            <button className="control-button next">
                                <img src={next} alt="next" />
                            </button>
                            <button className="control-button repeat">
                                <img src={repeat} alt="repeat" />
                            </button>
                        </div>

                        <div className="playback-bar">
                            <span className="progressTime current">0.00</span>
                            <div className="progressBar">
                                <div className="progressBarBg">
                                    <div className="progress"></div>
                                </div>
                            </div>
                            <span className="progressTime remaining">0.00</span>
                        </div>
                    </div>
                </div>
                <div className="nowPlaiyngRight">
                    <div className="volumeBar">
                        <button className="control-button volume">
                            <img src={volume} alt="volume"/>
                        </button>

                        <div className="progressBar">
                            <div className="progressBarBg">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player