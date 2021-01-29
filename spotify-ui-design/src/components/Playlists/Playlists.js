import React from 'react'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { Link } from 'react-router-dom'
import './Playlists.scss'

const Playlists = ({category_id, albumData}) => {

    let matchedPlaylists = albumData
        .filter(playlist => playlist.genre_id === category_id)

    return (
        <div className="cardsWrapInner">
            {matchedPlaylists.map((playlist, id) => (
                <Link to={`/playlist/${playlist.album_id}`} key={id}>
                    <div className="card">
                        <div className="cardImage">
                            <img src={playlist.album_img} alt="Pic 1" />
                        </div>
                        <div className="cardContent">
                            <h3>{playlist.album_name}</h3>
                            <span>{playlist.album_tag}</span>
                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Playlists