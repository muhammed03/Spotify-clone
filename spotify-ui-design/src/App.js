import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./services/SpotifyService";
import Login from './components/Login/'
import PreApp from './PreApp'
import './App.scss'
import { useLocation } from "react-router-dom";

function App() {
    const [token, setToken] = useState(null);
    const { pathname } = useLocation();
  
    useEffect(() => {
      const parsed = getTokenFromUrl(pathname);
      console.log("parsed", parsed);
  
      if (parsed && parsed.access_token) {
        setToken(parsed.access_token);
      }
  
      console.log("token", token);
    }, []);
  
    return <div className="app">{token ? <PreApp /> : <Login />}</div>;
  }
  
  export default App;