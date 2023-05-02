import React from 'react';
import { Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './Data/SidebarData';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import './Style/Sidebar.scss'

function Sidebar(props) {
  return (
    <>
      <Container fluid className='sidebar'>
        <Row className='px-3'>
          <img className='sidebarlogo-img' src={Assest.sidebarlogo} alt='logo'/>
        </Row>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName} onClick={()=> props.onClose()}>
              <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-text active" : item.cName}>
                {item.icon}
                <span className='title'>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </Container>
    </>
  )
}

export default Sidebar;
