import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import './Style/Layout.scss';
import Topbar from './Topbar';
import Sidebar from './Sidebar';


class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpenSidebar: false,
        }
    }

    showSidebar = () => {
        this.setState({ isOpenSidebar: !this.state.isOpenSidebar })
    }
    render() {
        return (
            <>
                <Container fluid className='layout-container'>
                    <Row className='topbar-container'>
                        <Topbar />
                    </Row>
                    <Row className='main-container'>
                        <div className='d-flex p-4'>
                            <div className='hidden-on-mobile'>
                                <Sidebar />
                            </div>
                            <div className='mx-4 p-4 border outlet-container'>
                                <Outlet />
                            </div>
                        </div>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Layout