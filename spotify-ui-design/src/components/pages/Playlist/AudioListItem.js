import React from 'react'
import { ReactComponent as PlayIcon } from '../../../assets/svgs/play.svg'

const AudioListItem = ({data, onPlayed, number}) => {

        return (   
            <li onClick={() => onPlayed(data)}>
                <div className="songIcon">
                    <span className="noteI">{number}</span>
                    <PlayIcon className="playI" />
                </div>
                <div className="songDetails">
                    <h3>{data.audio_name}</h3>
                    <span>{data.audio_author}</span>
                </div>
                <div className="songTime">
                    <span>duration</span>
                </div>
            </li>
        )
}

export default AudioListItem;