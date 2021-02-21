import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import '../App.css';
import { DOMAIN } from "../common";

class RoomView extends React.Component{

  constructor(props) {
    super(props);
    var song_url = "https://open.spotify.com/embed/track/3Icfi1u3cflshuufK4AsIv";
    this.state = {
      songSearch : ""
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
              src={this.song_url}
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
              onClick={() => this.props.SearchForSong(this.state.songSearch)}
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
                <List>
                  <ListItem>
                    <Button variant="contained" color="secondary" fullWidth>
                      Song 1
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button variant="contained" color="secondary" fullWidth>
                      Song 1
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button variant="contained" color="secondary" fullWidth>
                      Song 1
                    </Button>
                  </ListItem>
              </List>
              </div>
              <p> "Share this room w/ friends!" </p>
              <a href={`${DOMAIN}/room/${this.props.roomInfo.name}`}> {`${DOMAIN}/room/${this.props.roomInfo.roomNumber}`} </a>
            </div>
          </div>
        </div>
    )};
}
  
export default RoomView;