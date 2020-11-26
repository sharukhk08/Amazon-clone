import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // firebase stuff
    }
    const register = e => {
        e.preventDefault();
        // firebase stuff
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-login" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login__signInButton" onClick={signIn}> Sign In</button>
                </form>
                <p>By sign in check the terms and condition of amazon clone made by sharukh.
                See the privacy and cookies condition by the website
                </p>
                <button onClick={register} type="button" className="login__registerButton">Create your amazon account</button>
            </div>

        </div>
    )
}

export default Login
