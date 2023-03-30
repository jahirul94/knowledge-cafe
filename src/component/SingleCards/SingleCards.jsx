import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './SingleCards.css'

const SingleCards = ({user}) => {
    const {img , user_picture , name , last_seen , read} = user ;
    console.log(user)
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
                        <p>{read}</p>
                        <FontAwesomeIcon icon={faBookBookmark} />
                    </div>
               </div>
              <h2 className='text'>How to get your first job as a self- <br/> taught programmer</h2>
            <div className='markAsLink'>
                 <a href="./mark">Mark as read</a>  
            </div>
        </div>
    );
};

export default SingleCards;