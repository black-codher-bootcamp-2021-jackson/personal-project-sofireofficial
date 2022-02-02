import React, {useState, useEffect} from "react";

const Shop = () => {

const [toDos, setToDos] = useState([]);
useEffect( () => {
  // console.log('shop page here')
  fetch('http://localhost:8080/todo', {mode:'no-cors'})
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
      <p style={{color:"#775b1d"}}> This is the Shopping Page</p>
      <ul>
        {toDos.map(toDo => {
            return (
              <li>{toDo.name}</li>
            )
        })}
      </ul>
      </div>
);
};

export default Shop