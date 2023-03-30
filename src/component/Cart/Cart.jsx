import React, { useEffect, useState } from 'react';

const Cart = () => {
  
  const [users , setUsers] = useState([])
  
  useEffect(()=>{
      fetch("user.json")
      .then(res => res.json())
      .then(data => console.log(data))
  },[]);

    return (
        <div>
            
        </div>
    );
};

export default Cart;