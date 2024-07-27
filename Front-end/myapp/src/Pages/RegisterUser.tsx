import React, { useState, useEffect } from 'react';
import "../styles/LoginPage.css";
import Button from '@mui/material/Button';
import Header from '../Components/Header';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { useNavigate } from 'react-router-dom';
const RegisterUser = () =>
{
    const [ email, setEmail ] = useState("");
    const [ pass, setPass ] = useState("");
    const navigate = useNavigate();
    function register()
    {
        axios.post('http://localhost:5000/api/auth/registerUser', {
            email: email,
            password: pass
        }).then((res) =>
        {
            Swal.fire({
                title: 'Success',
                text: 'User Registration Success',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        })
            .catch((err) =>
            {
                Swal.fire({
                    title: 'Error!',
                    text: 'Email Already Registered!',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
            });
    }
    return (
        <div>
            <Header />
            <div>
                <Button className='switch-btn' size="small" color='secondary' variant='outlined' onClick={() => navigate("/registerAdmin")}>Admin</Button>
            </div>
            <div className="inp-box">
                <input type="text" className="email-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="pass-input" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                <p>Forgot Password?</p>
                <div className="login-btn">
                    <Button variant="contained" onClick={() => register()}>Register</Button>
                </div>
                <a href='/loginUser'>Already have an account? Login</a>
            </div>
        </div>
    )
}

export default RegisterUser