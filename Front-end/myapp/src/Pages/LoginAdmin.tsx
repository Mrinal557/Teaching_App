import React, { useState, useEffect } from 'react';
import "../styles/LoginPage.css";
import Button from '@mui/material/Button';
import Header from '../Components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginAdmin = () =>
{
    const [ email, setEmail ] = useState("");
    const [ pass, setPass ] = useState("");
    const navigate = useNavigate();
    function login()
    {

    }
    return (
        <div>
            <Header />
            <div>
                <Button className='switch-btn' size="small" color='secondary' variant='outlined' onClick={() => navigate("/loginUser")}>User</Button>
            </div>
            <div className="inp-box">
                <input type="text" className="email-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="pass-input" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                <p>Forgot Password?</p>
                <div className="login-btn">
                    <Button variant="contained" onClick={() => login()}>Login</Button>
                </div>
                <a href="/registerAdmin">Don't have an account? Register</a>
            </div>
        </div>
    )
}

export default LoginAdmin