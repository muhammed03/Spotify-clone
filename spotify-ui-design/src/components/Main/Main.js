import React from 'react'
import Categories from '../Categories/'
import Header from '../Header/'
import { Switch, Route } from 'react-router-dom'
import PlaylistPage from '../pages/Playlist'
import './Main.scss'

const Main = () => {
    return (
        <div className="main">
            <Header />
            <div className="mainContent">
                <Switch>
                    <Route path="/" exact component={Categories}></Route>
                    <Route path="/search">Search</Route>
                    <Route path="/your-library">Your-libary</Route>
                    <Route path="/playlist/" component={PlaylistPage}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Main