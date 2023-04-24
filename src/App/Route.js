import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from '../Component/Login/Login';
import Dashboard from '../Component/Dashboard/Dashboard';
import Layout from '../Component/Layout/Layout';

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
                            <Route path='/team-members' element={<Dashboard />} />
                            <Route path='/groups' element={<Dashboard />} />
                            <Route path='/Brodcasts' element={<Dashboard />} />
                            <Route path='/awards' element={<Dashboard />} />
                            <Route path='/about-us' element={<Dashboard />} />
                            <Route path='/information' element={<Dashboard />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default Router