import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import '../App.css';
import { DOMAIN } from "../common";

class RoomView extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      songSearch : "",
    }

    this.songSearchUpdateHandler = this.songSearchUpdateHandler.bind(this);
  }

  songSearchUpdateHandler = (event) => {
    this.setState({
      songSearch : event.target.value
    })
  }
  // const [songSearch, setSongSearch] = useState("");

  render() {
    
    return (
        <div>
          <div className="float-container">
            <div>
              <iframe
              title="player"
              src={this.props.currentSong}
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media">
              </iframe>
            </div>
            <div className="float-child">
              <h1>Queue a Song:</h1>
              <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="search"
              label="Search"
              name="search"
              onChange={(event) => this.songSearchUpdateHandler(event)}
              autoFocus
              />
              <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.ChangeSong(this.state.songSearch)}
              >
                  + Add to the queue
              </Button>
              {/* <p>{`Queue: ${props.roomInfo.songList}`} </p> */}
              {this.props.songsList && this.props.songsList.length<=0 &&<p>"Its depressing here without songs!! Please add songs." </p>}
              {/* <p>Group Name: {`${props.roomInfo.name}`}</p> */}
              {/* <p>Group Owner: {`${props.roomInfo.admin}`}</p> */}
              { this.props.songsList && this.props.songsList.length>0 &&
              this.props.songsList.map((song, indx)=> {
                  return <h4 key = {indx}>{song[0]}</h4>
                })
              }
              
            </div>
            <div>
           
            </div>
            <div className="float-child">
              <div>
                <h1>Voting</h1>
                {/* <p>Current top voted songs: {`${props.roomInfo.currentTopVotedSongs}`}</p> */}
                {this.props.songsList && this.props.songsList.length>=3 &&
                  <List>
                    <ListItem>
                      <Button variant="contained" color="secondary" fullWidth>
                      { this.props.votedSongsList && this.props.votedSongsList.length>0 && this.props.votedSongsList[0][0]}
                      </Button>
                      <h3>{ this.props.currentVotes[0]}</h3>
                    </ListItem>
                    <ListItem>
                      <Button variant="contained" color="secondary" fullWidth>
                      {this.props.votedSongsList && this.props.votedSongsList.length>0 && this.props.votedSongsList[1][0]}
                      </Button>
                      <h3>{this.props.currentVotes[1]}</h3>
                    </ListItem>
                    <ListItem>
                      <Button variant="contained" color="secondary" fullWidth>
                      {this.props.votedSongsList && this.props.votedSongsList.length>0 && this.props.votedSongsList[2][0]}
                      </Button>
                      <h3>{this.props.currentVotes[2]}</h3>
                    </ListItem>
                    <ListItem>
                      <Button
                      onClick = {()=>{this.props.createNewVote()}}
                      >
                        Do a new Vote
                      </Button>
                    </ListItem>
                </List>
               }
              </div>
              <p> "Share this room w/ friends!" </p>
              <a href={`${DOMAIN}/room/${this.props.roomInfo.name}`}> {`${DOMAIN}/room/${this.props.roomInfo.roomNumber}`} </a>
            </div>
          </div>
        </div>
    )};
}
  
export default RoomView;