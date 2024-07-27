import React from 'react'
import Header from '../Components/Header'
import '../styles/ShowUser.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const ShowUser = () =>
{
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className='user-container'>
                <p style={{ textDecoration: "underline", fontSize: "18px" }}>Lectures on</p>
                <div className='lectures'>

                    <Button variant='contained' size='medium' onClick={() => navigate("/phy-lect")}>Physical</Button>
                    <br />
                    <Button variant='contained' size='medium' onClick={() => navigate("/ino-lect")}>Inorganic</Button>
                    <br />
                    <Button variant='contained' size='medium' onClick={() => navigate("/org-lect")}>Organic</Button>
                </div>
                <p style={{ textDecoration: "underline", fontSize: "18px" }}>Test Series on</p>
                <div className='test-series'>
                    <Button variant='contained' size='medium' onClick={() => navigate("/phy-ts")}>Physical</Button>
                    <br />
                    <Button variant='contained' size='medium' onClick={() => navigate("/ino-ts")}>Inorganic</Button>
                    <br />
                    <Button variant='contained' size='medium' onClick={() => navigate("/org-ts")}>Organic</Button>
                </div>
            </div>
        </div>
    )
}

export default ShowUser