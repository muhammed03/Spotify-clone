import React from 'react'
import { ReactComponent as PlayIcon } from '../../../assets/svgs/play.svg'
import { ReactComponent as NoteIcon } from '../../../assets/svgs/note.svg'
import likedImg from '../../../assets/images/liked.png'
import './Liked.scss'

const LikedPage = ({liked}) => {
    console.log(liked)

    return (
        <div className="likedPage">
            <div className="mainInner">
                <div className="likedPageInfo">
                    <div className="likedPageImage">
                        <img
                            src={likedImg}
                            alt="pic"
                        />
                    </div>
                    <div className="likedPageContent">
                        <p className="smallText uppercase bold">Playlist</p>
                        <h1>Liked Songs</h1>
                        <div className="likedPageDesc">
                            <p className="spotify">Spotify</p>
                            <span>Number of songs</span>
                        </div>
                    </div>
                </div>
                <div className="likedPageSongs">
                    <div className="playlistButtons">
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                        <div className="icons">
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

export default LikedPage