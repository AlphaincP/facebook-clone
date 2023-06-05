import React from 'react';
import { BsArrowRight, BsArrowUpRight, BsChat, BsHandThumbsUp, BsShare, BsThreeDots } from 'react-icons/bs';
import './DataCard.css';
import img from './images/profile.png';
import img1 from './images/timg10.jpeg';
import { posts } from './data';
import Time from './time';

const DataCard = () => {
  return (
    <div>
        {
            posts.map(post =>(
                <div className='data_card'>
                <div className='data_header'>
                    <div className='data_profile'>
                        <img src={img}/>
                    </div>
                    <div className='data_name'>
                        <h3>{post.name}</h3>
                        <p><Time time={post.time}/></p>
                    </div>
                    <div className='data_more'>
                        <BsThreeDots className='d_more'/>
                    </div>
                </div>
                <div className='data_body'>
                    <div className='data_content'>
                        <p>{post.body}</p>
                    </div>
                    <div className='data_image'>
                       <img src={post.image}/>
                    </div>
                    <div className='data_options'>
                        <div className='data_like'>
                            <BsHandThumbsUp className='d_t'/>
                            <span>{post.likes}</span>
                        </div>
                        <div className='data_op'>
                            <ul>
                                <li><span>{post.comment}</span> <BsChat className='d_o'/></li>
                                <li><span>{post.retweet}</span> <BsShare className='d_o'/></li>
                            </ul>
                        </div>
                    </div>
                    <div className='data_icons'>
                        <ul>
                            <li><BsHandThumbsUp className='d_i'/> <span>Like</span></li>
                            <li><BsChat className='d_i'/> <span>Comment</span></li>
                            <li><BsArrowRight className='d_i'/> <span>Share</span></li>
                        </ul>
                    </div>
                </div>
              </div>  
            ))
         
        }
     
    </div>
  )
}

export default DataCard
