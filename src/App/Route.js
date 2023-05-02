import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from '../Component/Login/Login';
import Dashboard from '../Component/Dashboard/Dashboard';
import Layout from '../Component/Layout/Layout';
import About from '../Component/About/About';

export class Router extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        {/* <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} /> */}
                        <Route element={<Layout/>}>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/chats' element={<Dashboard />} />
                            <Route path='/admin-members' element={<Dashboard />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contactus' element={<Dashboard />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default Router