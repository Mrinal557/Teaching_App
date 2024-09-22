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
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();
    function register()
    {
        axios.post('http://localhost:5000/api/auth/registerUser', {
            email: email,
            password: password
        }).then((res) =>
        {
            Swal.fire({
                title: 'Success',
                text: 'User Registration Success',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
            navigate("/loginUser");
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
                <Button className='switch-btn' size="small" color='secondary' variant='contained' onClick={() => navigate("/registerAdmin")}>Admin</Button>
            </div>
            <div className="inp-box">
                <input type="text" className="email-input" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="pass-input" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <a className='forgot-pass' href='#'>Forgot Password?</a>
                <div className="login-btn">
                    <Button variant="contained" onClick={() => register()}>Register</Button>
                </div>
                <a className="switch" href='/loginUser'>Already have an account? Login</a>
            </div>
        </div>
    )
}

export default RegisterUser