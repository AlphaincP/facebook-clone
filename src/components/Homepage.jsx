import React from 'react'
import StoryCard from './StoryCard';
import './Homepage.css';
import PostCard from './PostCard';
import DataCard from './DataCard';

const Homepage = () => {
  return (
    <div>
      <div className='Homepage'>
        <div className='post_section'>
            <StoryCard/>
            <PostCard/>
            <DataCard/>
        </div>
        <div className='sponsor_section'>
          
        </div>
      </div>
    </div>
  )
}

export default Homepage
