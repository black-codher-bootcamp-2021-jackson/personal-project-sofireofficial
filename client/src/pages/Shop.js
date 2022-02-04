import React, {useState, useEffect} from "react";

const Shop = () => {

const [items, setItems] = useState([]);
useEffect( () => {
  console.log('shop page here')
  fetch('http://localhost:8000/shop', {mode:'no-cors'})
  .then(response => response.json())
  .then(data => console.log(data));
}, []);
//  above, when the shop page is rendered
//  This tells useEffect when to run"
//  It'll look in  the list to see if anything has changed
//  Based on no changes. On MOUNT! (1st render only)!!! Not updates!! Not telling useeffect to look at anything in particular

return (
    <div>
      <h1>⭐Shop⭐</h1>
      <p className="Page-info"> 🛒 <br/> This is the Shopping Page  </p>
      <ul>
        {items.map(item => {
            return (
              <li>{item.name}</li>
            )
        })}
      </ul>
      </div>
);
};

export default Shop