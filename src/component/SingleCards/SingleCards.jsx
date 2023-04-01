import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleCards.css'

const SingleCards = (props) => {
    const {img , user_picture , name , last_seen , read , title , id} = props.user ;
     const calculateTotalTime = props.calculateTotalTime;
     const calculateBookMark = props.calculateBookMark;
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
                        <FontAwesomeIcon onClick={()=>calculateBookMark(title)} icon={faBookmark} />
                    </div>
               </div>
              <h3 className='text'>{title}</h3>
            <div className='markAsLink'>
                 <a  onClick={()=>calculateTotalTime(read)}>Mark as read</a>
            </div>
        </div>
    );
};

export default SingleCards;