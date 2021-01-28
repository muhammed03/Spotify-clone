import React, { Component } from 'react'
import volume from "../../images/icons/volume.png"
import Audio from './Audio/Audio'
import './Player.scss'

export default class Player extends Component{

    render () {
        return (
            <div className="musicControls">
                <div className="playingBar">
                    <div className="nowPlaiyngLeft">
                        <div className="player-content">
                            <span className="albumLink">
                                <img className="albumArtWork" src="https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80" alt="Album"/>
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
                    <Audio />
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
}