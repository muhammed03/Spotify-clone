import React from 'react'
import { useParams } from 'react-router-dom'
import AudioListItem from './AudioListItem'

const AudioList = ({audioData, onClicked}) => {

    let { id } = useParams()

    let matchedAudio = audioData[parseInt(id)-1].filter(album => album.album_id === parseInt(id))

    return(
        <ul className="songList">
            {matchedAudio.map(function(audio, id){
                return <AudioListItem onPlayed={onClicked} key={id} data={audio} number={id+1} />
            })}
        </ul>
    ) 

}

export default AudioList;