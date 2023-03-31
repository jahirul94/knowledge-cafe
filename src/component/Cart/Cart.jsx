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
 const calculateBookMark =()=>{
    const bmField = JSON.parse(updateBM);
     const newBM = bmField + 1 ;
     setUpdateBM(newBM)
 }
//   bookmarksmarks

 const [bookmarks , setBookmarks] = useState([]);
   const showBookmarks = title =>{
        const oldTitle = bookmarks ;
        const newTitle = oldTitle + title;
        setBookmarks(newTitle)
   }


    return (
        <div className='main-Cart'>
            <div>
                {
                    users.map(user =><SingleCards user = {user} key ={user.id} calculateTotalTime={calculateTotalTime} calculateBookMark={calculateBookMark}  showBookmarks={showBookmarks}></SingleCards>)
                }
            </div>
            <div className='display-details'>
                 <div className='spent-time'>
                      <h2>Spent time on read : {updateTime} Min </h2>
                 </div>
                 <div className='book-mark-blog'>
                        <h2>Bookmarked Blogs : {updateBM}</h2>
                        <h4> {bookmarks}</h4>
                 </div>
            </div>
        </div>
    );
};

export default Cart;