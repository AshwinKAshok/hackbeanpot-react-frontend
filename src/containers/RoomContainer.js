import React from 'react';
import RoomView from "../views/RoomView.js";
import {
  useState,
  useEffect
} from "react";
import {API_URL} from  "../common";

class RoomContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songsList : [],
      votedSongsList : [],
      roomInfo : {},
      roomNumber: -1
    }

    //Register hanlders
    this.SearchForSong = this.SearchForSong.bind(this);
    this.FormatURL = this.FormatURL.bind(this);
    this.addSongToList = this.addSongToList.bind(this);
    this.addSongToVotedList = this.addSongToVotedList.bins(this);
    this.formatEmbedURL = this.formatEmbedURL.bind(this);
  }


  componentDidMount = async() => {

    await fetch(API_URL + `/room/${this.props.match.params.roomNumber}`, {
      method: "GET",
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(async response => await response.json())
    .then(response => {
      console.log(response);
      this.setState({
        roomNumber: this.props.match.params.roomNumber,
        roomInfo: response
      })  
    }).catch(err => console.log(err));
  }


  FormatURL = (song) => {
    let firstHalf = "https://api.spotify.com/v1/search?q=";
    let endHalf = "&type=track&limit=1";
    let filler = "%20";
    let splitSong = song.split(" ");
    let togetherSong = splitSong.join(filler);
    return firstHalf + togetherSong + endHalf;
  }

  formatEmbedURL = (url) => {
    let prefix = 'https://open.spotify.com/';
    let splitUrl = url.split(prefix);
    return prefix + 'embed/' + splitUrl[1];
  }

  SearchForSong = async (song) => {
    let songURL = FormatURL(song);
    await fetch (songURL,
    {
      method: "GET",
      headers: {
        "Authorization": "Bearer BQAea_1bcZfVlJW1QcgqAmq_5ZJhjEZDRQwMnTzXEQeUi22fkkeZf4B6LiUh1vPbSNth1iOMF02vhgtRdNLK5s4KSxzKcLANmcREa7JONV3qKvxJum__Ut69HBtH7f_-q-4plsuw1igwHcDdZhywBufLOwQcaydEn4o"
      }
    }).then(async response => await response.json())
    .then(response => {
      let result = response.tracks.items[0];
      let track = result.name;
      let url = result.external_urls.spotify;
      let embedUrl = formatEmbedURL(url);
      console.log(track);
      console.log(embedUrl);
      return track;
    }).catch(err => console.log(err));

  };

  addSongToList = (song) => {

  }

  addSongToVotedList = (song) => {

  }

  render() {
    return ( 
    <RoomView
      roomInfo={this.state.roomInfo}
      SearchForSong={this.SearchForSong}
    />
    );
}
}


export default RoomContainer;