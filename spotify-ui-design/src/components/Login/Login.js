import React from 'react'
import './Login.scss'
import { loginUrl} from '../../services/SpotifyService'

function Login() {
    return(
        <div className="login">
            <a href={loginUrl}>Login or register</a>
        </div>
    )
}

export default Login;