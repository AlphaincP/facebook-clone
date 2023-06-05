import React from 'react'
import { BsCameraVideoFill, BsFillEmojiSmileFill, BsJournalBookmark, BsPerson } from 'react-icons/bs'
import './PostCard.css';

const PostCard = () => {
  return (
    <div>
      <div className='post_card'>
        <div className='post_card_header'>
            <BsPerson className='p_account'/>
            <input type='text' placeholder="What's on your mind, Nelson?"/>
           
            </div>
             <hr className='hr2'/>
            <div className='post_options'>
                <ul>
                    <li>
                        <BsCameraVideoFill className='p_icon p_1'/>
                        <span>Live video</span>
                    </li>
                    <li>
                        <BsJournalBookmark className='p_icon p_2'/>
                        <span>Photo/video</span>
                    </li>
                    <div className='p_activity'>
                        <li>
                        <BsFillEmojiSmileFill className='p_icon p_3'/>
                        <span>Feeling/Activity</span>
                    </li>
                        </div>
                    
                </ul>
            </div>
        
      </div>
    </div>
  )
}

export default PostCard
