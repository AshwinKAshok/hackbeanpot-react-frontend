import React from 'react';
import RoomView from "../views/RoomView.js";
import {
  useState,
  useEffect
} from "react";
import {API_URL} from  "../common";

const RoomContainer = (props) => {
  const [roomNumber, _] = useState(props.match.params.roomNumber);
  const [roomInfo, setRoomInfo] = useState(props.match.params.roomNumber);
  useEffect(() => async () => {
    return await fetch(API_URL + `/room/${roomNumber}`, {
        method: "GET",
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(async response => await response.json())
      .then(response => {
        console.log(response);
        setRoomInfo(response);
      }).catch(err => console.log(err));
  }, [roomNumber])



  return ( 
  <RoomView roomInfo={roomInfo}/>
  );
}




export default RoomContainer;