import React, { useState } from 'react';
import {BsBellFill, BsMessenger, BsPerson, BsSearch,} from 'react-icons/bs';
import './Navbar.css';
import {MdPerson3} from 'react-icons/md';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [isExpanded,setExpanded] = useState(false);
  return (
    <div>
      <div className='Navbar'>
        <div className='navbar_items'>
            <div className='navbar_title'>
                <h3>facebook</h3>
            </div>
            <div  className={`${isExpanded ? 'navbar_search expanded':'navbar_search'}`}>
                <input type='search' placeholder='Search facebook'/>
                <BsSearch className='s_icon' onClick={() => setExpanded(!isExpanded)}/>
            </div>
            <div className='navbar_icons'>
                <ul>
                    <li><BsMessenger className='n_icon'/></li>
                    <li><BsBellFill className='n_icon'/></li>
                    <li><MdPerson3 className='n_icon'/></li>
                </ul>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Navbar
