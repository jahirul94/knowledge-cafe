import React from 'react';
import './SingleCards.css'

const SingleCards = ({user}) => {
    const {img , user_picture , name , last_seen} = user ;
    console.log(user)
    return (
        <div className='single-Cards'>
              <img src={img} alt="" />
              <div className='user-id'>
                  <img src={user_picture} alt="" />
                   <div className='user'>
                       <h2>{name}</h2>
                       <p><small>{last_seen}</small></p>
                   </div>
              </div>
              <h2 className='text'>How to get your first job as a self- <br/> taught programmer</h2>  
        </div>
    );
};

export default SingleCards;