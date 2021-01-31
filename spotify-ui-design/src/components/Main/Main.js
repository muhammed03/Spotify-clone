import React from 'react'
import Categories from '../Categories/'
import Header from '../Header/'
import { Switch, Route } from 'react-router-dom'
import PlaylistPage from '../pages/Playlist/Playlist'
import LikedPage from '../pages/Liked/Liked'
import SearchPage from '../pages/Search/'
import './Main.scss'

const Main = ({album, audio, audioPlay, liked}) => {
    return (
        <div className="main">
            <Header />
            <div className="mainContent">
                <Switch>
                    <Route path="/" exact>
                        <Categories albumData={album}/>
                    </Route>
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                    <Route path="/your-library">Your-library</Route>
                    <Route path="/playlist/:id">
                        <PlaylistPage albumData={album} audioData={audio} audioPlay={audioPlay}/>
                    </Route>
                    <Route path="/liked/">
                        <LikedPage liked={liked} />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Main