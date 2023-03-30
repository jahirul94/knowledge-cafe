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
    return (
        <div className='main-Cart'>
            <div>
                {
                    users.map(user =><SingleCards user = {user} key ={user.id}></SingleCards>)
                }
            </div>
            <div>
                 <h2>Container</h2>
            </div>
        </div>
    );
};

export default Cart;