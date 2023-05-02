import React, { Component , Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import './Style/Layout.scss';
import Topbar from './Topbar';
import Footer from './Footer';


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
                <Suspense fallback="loading...">
                    <Container fluid className='layout-container'>
                        <Row className='topbar-container'>
                            <Topbar />
                        </Row>
                        <Row className='main-container'>
                            <div className='d-flex p-4'>
                                <div className='p-4 border outlet-container'>
                                    <Outlet />
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Footer />
                        </Row>
                    </Container>
                </Suspense>
            </>
        )
    }
}

export default Layout