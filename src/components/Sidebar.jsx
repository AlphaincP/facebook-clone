import React from 'react';
import {  BsFlagFill, BsGrid3X3GapFill, BsHouseFill,  BsLink,  BsPeopleFill, BsPerson, BsPlaystation, BsShop,  } from 'react-icons/bs';
import { MdHome, MdVideocam } from 'react-icons/md';
import './Sidebar.css';

const Sidebar = ({activeTab,onTabChange}) => {
  return (
    <div>
      <div className='Sidebar'>
        <div className='sidebar_items'>
            <div className='sidebar_account'>
                <ul>
                    <li className='sd_i'><MdHome className='sd_ico'/> <span>Home</span></li>
                    <li><BsPerson className='sd_icon'/> <span>Nelson Osei Tutu                                                                                  </span></li>
                </ul>
                <hr className='hr'/>
            </div>
            <div className='sidebar_view'>
                <ul>
                    <li><MdVideocam className='ad_icon'/> <span>Watch</span></li>
                    <li><BsPeopleFill className='ad_icon'/> <span>Friends</span></li>
                    <li><BsFlagFill className='ad_icon'/> <span>Pages</span></li>
                    <li><BsShop className='ad_icon'/> <span>Marketplace</span></li>
                    <li><BsPlaystation className='ad_icon'/> <span>Games</span></li>
                    <li><BsGrid3X3GapFill className='ad_icon'/> <span>See all</span></li> 
                </ul>
                <hr className='hr'/>
                <ul>
                    <li className='group_li'><div className='group'>H</div> <span>Herbal life</span></li>
                    <li><BsPeopleFill className='ad_icon ad_ico'/> <span>See all groups</span></li>
                </ul>
                <hr className='hr'/>
                <ul>
                    <li><BsLink className='ad_ico'/> <span>See all shorcuts</span></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
