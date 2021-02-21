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
      currentVotes: [],
      roomInfo : {},
      roomNumber: -1,
      currentSong: "https://open.spotify.com/embed/track/3Icfi1u3cflshuufK4AsIv"
    }

    //Register hanlders
    this.SearchForSong = this.SearchForSong.bind(this);
    this.FormatURL = this.FormatURL.bind(this);
    this.addSongToList = this.addSongToList.bind(this);
    this.updateVoteList = this.updateVoteList.bind(this);
    this.FormatEmbedURL = this.FormatEmbedURL.bind(this);
    this.ChangeSong = this.ChangeSong.bind(this);
    this.createNewVote = this.createNewVote.bind(this);
    this.onVoteClickHanlder = this.onVoteClickHanlder.bind(this);
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

      let newSongsList = [];
      let newVotedSongsList = [];
      let newCurrentVotes = [];

      response.songList.forEach(song => newSongsList.push([song.songName, song.songUrl]));
      response.currentTopVotedSongs.forEach(votedSongs => newVotedSongsList.push([votedSongs.songName, votedSongs.songUrl]));
      response.votesForThreeSongs.forEach(votes => newCurrentVotes.push(votes));

      this.setState({
        roomNumber: this.props.match.params.roomNumber,
        roomInfo: response,
        songsList: newSongsList,
        votedSongsList: newVotedSongsList,
        currentVotes : newCurrentVotes
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
        "Authorization": "Bearer BQBFlVVg1CpDnzr-izRhsrOsNZg-wjuUfkFg4RWGbxTFxxMYFJ3ANjQ1ONBOnGTegZy-pgHCy_0Hny58Wf6e6C6hRImVVQpAoMR-jQcJXzZtWuqpejHtQcbDqzF4st97x6PCYBW48MBlWZVp__TKdYMoi5AWb62BqPqtc5QVrcYzgMT49k0ke7VDTB9LG2cNCL1hNxtT9xotWuUIkPCbW-42N-hcMz8TRWW0X7Z5NDssph6rlNVimGAFIL8qSM_Wjrme2KBEg6gKw0wi66bQdiM9F-MHtCH47PkriFVMyYFI"
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
    return embedUrl;
  };

  addSongToList = async (newSong) => {
    let newSongList = [...this.state.songsList];

    newSongList.push(newSong);

    await fetch(API_URL + `/song/list/room/${this.props.match.params.roomNumber}`, {
      method: "POST",
      body:JSON.stringify({
        "songName": newSong[0],
        "songUrl": newSong[1]
    }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(async response => await response.json())
    .then(response => {
      console.log("Add song to backend: "+ response);
    }).catch(err => console.log(err));

    console.log("newSong lit:");
    console.log(newSongList);

    this.setState({
      songsList : newSongList
    })
  }

  updateVoteList = (newVotedSongsList, reinitializedVotes) => {
    this.setState({
      votedSongsList : newVotedSongsList,
      currentVotes: reinitializedVotes
    })
  }



  createNewVote = async () => {
    //1. clear the existing voted songs in the backend
    await fetch(API_URL + `/room/${this.props.match.params.roomNumber}/songs/clearVotedSongs`, {
      method: "GET",
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(async response => await response.json())
    .then(response => {
      console.log("cleared voted songs in backend: "+ response);
    }).catch(err => console.log(err));

    //2. Select 3 songs randomly
    await fetch(API_URL + `/room/${this.props.match.params.roomNumber}/createvote`, {
      method: "GET",
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(async response => await response.json())
    .then(response => {
      console.log("new list of voted : "+ response);


      let newVotedSongsList = [
        [response[0].songName,response[0].songUrl],
        [response[1].songName,response[1].songUrl],
        [response[2].songName,response[2].songUrl],
    ]

    let reinitializedVotes = [0,0,0];

      this.updateVoteList(newVotedSongsList, reinitializedVotes)

    }).catch(err => console.log(err));
  }

  async ChangeSong(songName) {
    let nextSong = await this.SearchForSong(songName);
    console.log(nextSong);
    this.setState({
      currentSong : nextSong,
    })
  }


  onVoteClickHanlder = async (voteIndex) => {
    await fetch(API_URL + `/room/${this.props.match.params.roomNumber}/vote/${voteIndex}`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(async response => await response.json())
    .then(response => {
      console.log("cleared voted songs in backend: "+ response);
        let currentVote = this.state.currentVotes[voteIndex];
        let newVotes = [...this.state.currentVotes];
        newVotes[voteIndex] = currentVote + 1;

        this.setState({
          currentVotes : newVotes
        })

    }).catch(err => console.log(err));
  }


  render() {
    return ( 
    <RoomView
      roomInfo={this.state.roomInfo}
      SearchForSong={this.SearchForSong}
      songsList = {this.state.songsList}
      currentSong={this.state.currentSong}
      ChangeSong={this.ChangeSong}
      currentVotes = {this.state.currentVotes}
      votedSongsList={this.state.votedSongsList}
      createNewVote={this.createNewVote}
      onVoteClickHanlder = {this.onVoteClickHanlder}
    />
    );
}
}


export default RoomContainer;