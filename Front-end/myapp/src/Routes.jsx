import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterUser from './Pages/RegisterUser';
import RegisterAdmin from './Pages/RegisterAdmin';
import LoginUser from './Pages/LoginUser';
import LoginAdmin from './Pages/LoginAdmin';
const Routing = () =>
{
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<RegisterUser />} />
                    <Route path="/loginUser" element={<LoginUser />} />
                    <Route path="/registerUser" element={<RegisterUser />} />
                    {/* <Route path="/homeUser" element={<ShowUser />} /> */}
                    <Route path="/loginAdmin" element={<LoginAdmin />} />
                    <Route path="/registerAdmin" element={<RegisterAdmin />} />
                    {/* <Route path="/homeAdmin" element={<ShowAdmin />} /> */}
                </Routes>
            </Router>
        </div >
    )
}

export default Routing