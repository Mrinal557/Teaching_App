import React, { useState, useEffect } from 'react';
import "../styles/LoginPage.css";
import Button from '@mui/material/Button';
import Header from '../Components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
const LoginAdmin = () =>
{
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();
    const login= async()=> 
    {
        try
        {
            const response = await axios.post('http://localhost:5000/api/auth/loginAdmin', { email, password });
            const token = response.data.token;
            localStorage.setItem('adminToken', token);
            navigate("/homeAdmin");
        } catch (error)
        {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Account Not Found, Try Again',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        }
    }
    return (
        <div>
            <Header />
            <div>
                <Button className='switch-btn' size="small" color='secondary' variant='contained' onClick={() => navigate("/loginUser")}>User</Button>
            </div>
            <div className="inp-box">
                <input type="text" className="email-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="pass-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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