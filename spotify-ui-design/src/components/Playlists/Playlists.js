import React from 'react'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { Link } from 'react-router-dom'
import './Playlists.scss'

const Playlists = props => {
    const dataPlaylists = [
        {
            category_id: 1,
            name: 'Home playlist 1',
            img:
                'https://images.unsplash.com/photo-1599685661038-1c794448a37e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            desc: 'Tag',
        },
        {
            category_id: 2,
            name: 'Home playlist 1',
            img:
                'https://images.unsplash.com/photo-1599685661038-1c794448a37e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            desc: 'Tag',
        },
        {
            category_id: 3,
            name: 'Home playlist 1',
            img:
                'https://images.unsplash.com/photo-1599685661038-1c794448a37e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            desc: 'Tag',
        },
        {
            category_id: 4,
            name: 'Home playlist 1',
            img:
                'https://images.unsplash.com/photo-1599685661038-1c794448a37e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            desc: 'Tag',
        },
        {
            category_id: 4,
            name: 'Home playlist 1',
            img:
                'https://images.unsplash.com/photo-1599685661038-1c794448a37e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            desc: 'Tag',
        }
    ]

    let matchedPlaylists = dataPlaylists
        .filter(playlist => playlist.category_id === props.category_id)

    return (
        <div className="cardsWrapInner">
            {matchedPlaylists.map((playlist) => (
                <Link to={`/playlist/`}>
                    <div className="card">
                        <div className="cardImage">
                            <img src={playlist.img} alt="Pic 1" />
                        </div>
                        <div className="cardContent">
                            <h3>{playlist.name}</h3>
                            <span>{playlist.desc}</span>
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