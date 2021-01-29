import React from 'react'
import Categories from '../Categories/'
import Header from '../Header/'
import { Switch, Route } from 'react-router-dom'
import PlaylistPage from '../pages/Playlist/Playlist'
import LikedPage from '../pages/Liked/Liked'
import './Main.scss'

const Main = ({album, audio}) => {
    return (
        <div className="main">
            <Header />
            <div className="mainContent">
                <Switch>
                    <Route path="/" exact>
                        <Categories albumData={album}/>
                    </Route>
                    <Route path="/search">Search</Route>
                    <Route path="/your-library">Your-library</Route>
                    <Route path="/playlist/:id">
                        <PlaylistPage albumData={album} audioData={audio}/>
                    </Route>
                    <Route path="/liked/" component={LikedPage}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Main