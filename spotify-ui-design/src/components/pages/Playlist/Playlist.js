import React from 'react'
import { ReactComponent as PlayIcon } from '../../../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../../../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../../../svgs/note.svg'
import './Playlist.scss'

const PlaylistPage = () => {


    return (
        <div className="playlistPage">
            <div className="mainInner">
                <div className="playlistPageInfo">
                    <div className="playlistPageImage">
                        <img
                            src="https://images.unsplash.com/photo-1611110228353-80794af777dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                            alt="pic"
                        />
                    </div>
                    <div className="playlistPageContent">
                        <p className="smallText uppercase bold">Playlist</p>
                        <h1>Playlist Name</h1>

                        <p className="tagline">
                           Playlist Tag
                        </p>
                        <div className="playlistPageDesc">
                            <p className="spotify">Spotify</p>
                            <span>Number of likes</span>
                            <span>Duration</span>
                        </div>
                    </div>
                </div>
                <div className="playlistPageSongs">
                    <div className="playlistButtons">
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                        <div className="icons">
                            <div className="icon iconsHeart">
                                <HeartIcon />
                            </div>
                            <div className="icon iconsDots"></div>
                        </div>
                    </div>

                    <ul className="songList">
                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Playlist Name</h3>
                                <span>Playlist Author</span>
                            </div>
                            <div className="songTime">
                                <span>duration</span>
                            </div>
                        </li>
                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Playlist Name</h3>
                                <span>Playlist Author</span>
                            </div>
                            <div className="songTime">
                                <span>duration</span>
                            </div>
                        </li>
                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Playlist Name</h3>
                                <span>Playlist Author</span>
                            </div>
                            <div className="songTime">
                                <span>duration</span>
                            </div>
                        </li>
                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Playlist Name</h3>
                                <span>Playlist Author</span>
                            </div>
                            <div className="songTime">
                                <span>duration</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage