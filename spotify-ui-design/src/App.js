import React from 'react'
import Nav from './components/Nav/'
import Main from './components/Main/'
import Player from './components/Player/'

import './App.scss'

export default class App extends React.Component {

  state = {
    albumData: 
    [ 
      {album_id: 1, genre_id: 1, album_name: "First", album_tag: 'Street', album_img:'https://images.unsplash.com/photo-1611826655890-716e509ae734?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'},
      {album_id: 2, genre_id: 2, album_name: "Second", album_tag: 'Car', album_img:'https://images.unsplash.com/photo-1611820972863-59eaff523aba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=983&q=80'},
      {album_id: 3, genre_id: 3, album_name: "Third",  album_tag: 'Apartament', album_img:'https://images.unsplash.com/photo-1611782999284-d277c361cdbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80'},
   ],

    audioData: [
      [
        {
          audio_id: 1,
          album_id: 1,
          audio_name: 'first audio',
          audio_author: 'first author',
          audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' 
        },
        {
          audio_id: 2,
          album_id: 1,
          audio_name: 'second audio',
          audio_author: 'first author',
          audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' 
        },
        {
          audio_id: 3,
          album_id: 1,
          audio_name: 'third audio',
          audio_author: 'first author',
          audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' 
        }
      ],
      [
        {
          audio_id: 4,
          album_id: 2,
          audio_name: '1st audio of 2nd album',
          audio_author: 'author of second album',
          audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' 
        },
        {
          audio_id: 5,
          album_id: 2,
          audio_name: '2nd audio of 2nd album',
          audio_author: 'author of second album',
          audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' 
        },
        {
          audio_id: 6,
          album_id: 2,
          audio_name: '3rd audio of 2nd album',
          audio_author: 'author of second album',
          audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' 
        }
      ],
      [
        {
          audio_id: 7,
          album_id: 3,
          audio_name: '1st audio of 3rd album',
          audio_author: 'author of third album',
          audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' 
        },
        {
          audio_id: 8,
          album_id: 3,
          audio_name: '2nd audio of 3rd album',
          audio_author: 'author of third album',
          audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' 
        },
        {
          audio_id: 9,
          album_id: 3,
          audio_name: '3rd audio of 3rd album',
          audio_author: 'author of third album',
          audio_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' 
        }
      ]
    ],

    checkedAudio: {audio_url: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3`},
    liked: {likedSongs: "Liked"},

  }

  audioPlay = (el) => {
    this.setState(({checkedAudio,liked}) => {
      let newArray = [el]
      console.log(liked)
      return {
        checkedAudio: newArray,
      }
    });
  }

  render() {
    const {albumData, audioData, liked} = this.state

    return (
      <div className="outerWrap">
        <div className="App">
          <Nav />
          <Main onSearchChange={this.onSearchChange} album={albumData} audio={audioData} audioPlay={this.audioPlay} liked={liked}/>
        </div>
        <Player checkedAudio={this.state.checkedAudio}/>
      </div>
    )
  }
}