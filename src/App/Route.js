import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from '../Component/Login/Login';
const Dashboard = React.lazy(() => import('../Component/Dashboard/Dashboard'));
const Layout = React.lazy(() => import('../Component/Layout/Layout'));
const About = React.lazy(() => import('../Component/About/About'));

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