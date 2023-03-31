import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './SingleCards.css'

const SingleCards = (props) => {
    const {img , user_picture , name , last_seen , read , title} =props.user ;
     const calculateTotalTime = props.calculateTotalTime;
     const calculateBookMark = props.calculateBookMark;
     const  showBookmarks = props.showBookmarks;
    // console.log(user)
    return (
        <div className='single-Cards'>
              <img src={img} alt="" />
               <div className='user-details'>
                    <div className='user-id'>
                        <img src={user_picture} alt="" />
                        <div className='user'>
                            <h2>{name}</h2>
                            <p><small>{last_seen}</small></p>
                        </div>
                    </div>
                    <div className='bookmark'>
                        <p>{read} min read</p>
                        <FontAwesomeIcon onClick={()=>showBookmarks(title)} icon={faBookBookmark} />
                    </div>
               </div>
              <h2 className='text'>{title}</h2>
            <div className='markAsLink'>
                 <a  onClick={()=>calculateTotalTime(read)}>Mark as read</a>
            </div>
        </div>
    );
};

export default SingleCards;