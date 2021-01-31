import React from 'react'
import { ReactComponent as PlayIcon } from '../../../assets/svgs/play.svg'
import { ReactComponent as NoteIcon } from '../../../assets/svgs/note.svg'

const AudioListItem = ({data, onPlayed}) => {

        return (   
            <li onClick={() => onPlayed(data)}>
                <div className="songIcon">
                    <NoteIcon className="noteI" />
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