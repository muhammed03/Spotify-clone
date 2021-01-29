import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../../../svgs/play.svg'
import { ReactComponent as NoteIcon } from '../../../svgs/note.svg'

const AudioList = ({audioData}) => {

    let { id } = useParams()

    let matchedAudio = audioData[parseInt(id)-1].filter(album => album.album_id === parseInt(id))

    return(
        <ul className="songList">
            {matchedAudio.map(function(audio, id){
                return <li key={id}>
                    <div className="songIcon">
                        <NoteIcon className="noteI" />
                        <PlayIcon className="playI" />
                    </div>
                    <div className="songDetails">
                        <h3>{audio.audio_name}</h3>
                        <span>{audio.audio_author}</span>
                    </div>
                    <div className="songTime">
                        <span>duration</span>
                    </div>
                </li>
            })}
        </ul>

    ) 

}

export default AudioList;