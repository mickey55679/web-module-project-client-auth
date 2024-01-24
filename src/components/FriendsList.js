import React, { useState, useEffect} from "react";
import axios from 'axios'
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends ] = useState([]);
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)

    axiosWithAuth().get("/friends")
      .then(resp => {
        setFriends(resp.data);
      })
      .catch(err=> {
        console.log(err);
      });

  }, [])

 return (
   <div>
     <h2>FriendsList</h2>
     <ul>
       {friends.map((friend, index) => (
         <li
           key={index}
           style={{ margin: "10px", padding: "5px", border: "1px solid #ccc" }}
         >
           {friend.name} - {friend.age} - {friend.email}
         </li>
       ))}
     </ul>
   </div>
 );

      }
export default FriendsList