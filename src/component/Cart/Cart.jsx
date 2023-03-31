import React, { useEffect, useState } from 'react';
import SingleCards from '../SingleCards/SingleCards';
import './Cart.css'

const Cart = () => {
  
  const [users , setUsers] = useState([])
  
  useEffect(()=>{
      fetch("user.json")
      .then(res => res.json())
      .then(data => setUsers(data))
  },[]);
 
//   show Spent time section 
  const [updateTime , setUpdateTime] = useState(0);
  const calculateTotalTime = time =>{
      const field = JSON.parse(updateTime)
      const newTime = field + time;
      setUpdateTime(newTime);
  };
//  bookmark update 
const [updateBM , setUpdateBM] = useState(0);
const [bookmarks , setBookmarks] = useState([]);
 const calculateBookMark =(title)=>{
//    const availableDat = bookmarks.find(title)
    // if(availableData)
     const newTitle =[...bookmarks , title ];
     const bmField = JSON.parse(updateBM);
     const newBM = bmField + 1 ;
     setUpdateBM(newBM)
     setBookmarks(newTitle)
 }
    
//  const addedTitle = products.find(bookmark => bookmarks.id == id)   ;


    return (
        <div className='main-Cart'>
            <div>
                {
                    users.map(user =><SingleCards user = {user} key ={user.id} calculateTotalTime={calculateTotalTime} calculateBookMark={calculateBookMark}></SingleCards>)
                }
            </div>
            <div className='display-details'>
                 <div className='spent-time'>
                      <h2>Spent time on read : {updateTime} Min </h2>
                 </div>
                 <div className='book-mark-blog'>
                        <h2>Bookmarked Blogs : {updateBM}</h2>
                        {
                            bookmarks.map(bookmark => <h4> {bookmark}</h4>)
                        }
                 </div>
            </div>
        </div>
    );
};

export default Cart;