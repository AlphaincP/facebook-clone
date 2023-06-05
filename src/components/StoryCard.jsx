import React from 'react';
import { BsBookHalf, BsCameraVideoFill, BsClock, BsJournalAlbum, BsMessenger, BsPlusCircle, BsPlusCircleFill, } from 'react-icons/bs';
import './StoryCard.css';
import img from './images/timg10.jpeg';

const StoryCard = () => {
  return (
    <div>
      <div className='story_card'>
        <div className='story_items'>
            <ul>
                <li className='stories'><BsBookHalf className='st_icon'/> <span >Stories</span></li>
                <li><BsCameraVideoFill className='st_icon'/> <span>Reels</span></li>
            </ul>
             
        </div>
        <hr className='hr1'/>
        <div className='story_story'>
            <div className='story_add'>
                <img src={img}/>
                <span><BsPlusCircleFill className='st_ico'/></span>
                <p>create story</p>
            </div>
            <div className='story_details'>
                <ul>
                    <li><BsJournalAlbum className='sd_icon'/> <span>Share everyday moments</span></li>
                    <li><BsClock className='sd_icon'/> <span>Stories disappear after 24 hours</span></li>
                    <li><BsMessenger className='sd_icon'/> <span>Replies and Reactions are private</span></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StoryCard
 