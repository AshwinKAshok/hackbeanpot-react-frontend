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

  function FormatURL(song) {
    let firstHalf = "https://api.spotify.com/v1/search?q=";
    let endHalf = "&type=track&limit=1";
    let filler = "%20";
    let splitSong = song.split(" ");
    let togetherSong = splitSong.join(filler);
    return firstHalf + togetherSong + endHalf;
  }

  async function SearchForSong(song) {
    let songURL = FormatURL(song);
    await fetch (songURL,
    {
      method: "GET",
      headers: {
        "Authorization": "Bearer BQAea_1bcZfVlJW1QcgqAmq_5ZJhjEZDRQwMnTzXEQeUi22fkkeZf4B6LiUh1vPbSNth1iOMF02vhgtRdNLK5s4KSxzKcLANmcREa7JONV3qKvxJum__Ut69HBtH7f_-q-4plsuw1igwHcDdZhywBufLOwQcaydEn4o"
      }
    }).then(async response => await response.json())
    .then(response => {
      console.log(response);
      return response;
    }).catch(err => console.log(err));

  };

  return ( 
  <RoomView
  roomInfo={roomInfo}
  SearchForSong={SearchForSong}
  />
  );
}




export default RoomContainer;