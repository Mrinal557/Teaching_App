import React from 'react'
import Header from '../Components/Header'
import UploadContent from '../Components/UploadContent';
import { Button } from '@mui/material';
import '../styles/ShowUser.css';
const ShowAdmin = () =>
{
    const logout = () =>
    {
        localStorage.removeItem('adminToken');
        window.location.replace('/loginAdmin');
        window.localStorage.clear();
        window.sessionStorage.clear();
    }
    return (
        <>
            <Header />
            <div className='logout-btn'>
                <Button color='secondary' variant='contained' onClick={logout}>Logout</Button>
            </div>
            <div>
                <UploadContent />
            </div>
        </>
    )
}

export default ShowAdmin