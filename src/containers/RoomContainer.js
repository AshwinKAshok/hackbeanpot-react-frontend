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
    this.addSongToVotedList = this.addSongToVotedList.bind(this);
    this.FormatEmbedURL = this.FormatEmbedURL.bind(this);
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

  FormatEmbedURL = (url) => {
    let prefix = 'https://open.spotify.com/';
    let splitUrl = url.split(prefix);
    return prefix + 'embed/' + splitUrl[1];
  }

  SearchForSong = async (song) => {
    let songURL = this.FormatURL(song);
    let embedUrl;
    await fetch (songURL,
    {
      method: "GET",
      headers: {
        "Authorization": "Bearer BQBXo2frjyPZrk-1OISJo8UDayKZh16umX7dp--FJF0Z-tZVEzUb2eX5sgkVkWZx0f7-pruWobJvRcxYkfXFZuRf6gHXzRmTKD1Zjii228ftiTXHdImyPA1rlomM2hhIiUh2qaF789L92puofia6Wh4C27adHzwQPkw"
      }
    }).then(async response => await response.json())
    .then(response => {
      let result = response.tracks.items[0];
      let track = result.name;
      let url = result.external_urls.spotify;
      embedUrl = this.FormatEmbedURL(url);
      console.log(track);
      console.log(embedUrl);

      let newSong = [track, embedUrl];

      this.addSongToList(newSong);
    }).catch(err => console.log(err));
  };

  addSongToList = (newSong) => {
    let newSongList = [...this.state.songsList];
    newSongList.push(newSong);

    console.log("newSong lit:");
    console.log(newSongList);

    this.setState({
      songsList : newSongList
    })
  }

  addSongToVotedList = (song) => {

  }

  render() {
    return ( 
    <RoomView
      roomInfo={this.state.roomInfo}
      SearchForSong={this.SearchForSong}
      songsList = {this.state.songsList}
    />
    );
}
}


export default RoomContainer;