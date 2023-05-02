import React, { Component } from 'react';
import './Style/Topbar.scss';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, CardBody, Card } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import SidebarModel from '../../ReusableComponent/Component/SidebarModel/SidebarModel';
import Sidebar from './Sidebar';
import { Navlist } from './Data/Navlist';


export class Topbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isProfileOpen: true,
            collapse: false,
            isShowSidebar: false,
        }
    }

    showProfile = () => {
        this.setState({ isProfileOpen: !this.state.isProfileOpen, collapse: !this.state.collapse });
    }

    render() {
        return (
            <>
                <div className='topbar-container'>
                    <Container fluid className='topbar-mobile'>
                        <Row className='w-100 d-flex justify-content-center align-items-center'>
                            <Col className='d-flex justify-content-start align-items-center'>
                                <Assest.HamburgerMenu className='cursor' fill='white' onClick={() => this.setState({ isShowSidebar: !this.state.isShowSidebar })} />
                                &nbsp;&nbsp;
                                <img width={70} alt="logo" src={Assest.logo} />
                            </Col>
                            {/* <div className='hidden-on-mobile'> */}
                            {Navlist.map((item, index) => {
                                return (
                                    <Col key={index} className={`hidden-on-mobile ${item.cName}`}>
                                        <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-text active" : item.cName}>
                                            <span className='title'>{item.title}</span>
                                        </NavLink>
                                    </Col>
                                );
                            })}
                            {/* </div> */}
                            <Col className='d-flex justify-content-end align-items-center'>
                                <span className='d-flex align-items-center' onClick={() => this.showProfile()}>
                                    <img src={Assest.CgProfile} alt="logo" />
                                    {this.state.isProfileOpen ? <Assest.GoChevronDown fill='white' /> : <Assest.GoChevronUp fill='white' />}
                                </span>
                            </Col>
                        </Row>
                    </Container>
                    <Collapse
                        isOpen={this.state.collapse}
                    >
                        <Card className='collapse-card'>
                            <CardBody className='collapse-body'>
                                <li className='collapse-list'>
                                    <NavLink className={({ isActive }) => isActive ? "navlink active" : 'navlink'}>
                                        Logout
                                    </NavLink>
                                </li>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <SidebarModel show={this.state.isShowSidebar} onClose={() => this.setState({ isShowSidebar: !this.state.isShowSidebar })}>
                    <div className='Searchbar my-4'>
                        <Assest.BsSearch className='Searchbar-img' fill='gray' />
                        <input className='Searchbar-input' placeholder='Search...' />
                    </div>
                    <Sidebar onClose={() => this.setState({ isShowSidebar: false })} />
                </SidebarModel>
            </>
        )
    }
}

export default Topbar