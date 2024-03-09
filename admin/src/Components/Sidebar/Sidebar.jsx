import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_menu_icon from '../../assets/card.svg'
import list_menu from '../../assets/check.svg'
import view_fb from '../../assets/plane.svg'
import orders from '../../assets/budget.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addmenu'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={add_menu_icon} alt="" />
                <p style={{ textDecoration: 'none', color: 'white' }}>Add Menu</p>
            </div>
        </Link>
        <Link to={'/listmenu'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={list_menu} alt="" />
                <p style={{ textDecoration: 'none', color: 'white' }}>Menu List</p>
            </div>
        </Link>
        <Link to={'/viewfeedback'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={view_fb} alt="" />
                <p style={{ textDecoration: 'none', color: 'white' }}>View Feedback</p>
            </div>
        </Link>
        <Link to={'/manageorder'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={orders} alt="" />
                <p style={{ textDecoration: 'none', color: 'white' }}>Manage orders</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar