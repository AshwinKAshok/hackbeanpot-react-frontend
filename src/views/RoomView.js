import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import '../App.css';
import { DOMAIN } from "../common";

const RoomView = (props) => {
  const [songSearch, setSongSearch] = useState("");

    var song_url = "https://open.spotify.com/embed/track/3Icfi1u3cflshuufK4AsIv";
    return (
        <div>
          <div className="float-container">
            <div>
              <iframe
              title="player"
              src={song_url}
              width="100%"
              height="80"
              frameborder="0"
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
              onChange={(e) => setSongSearch(e.target.value)}
              autoFocus
              />
              <Button variant="contained" color="primary">
                  + Add to the queue
              </Button>
              {/* <p>{`Queue: ${props.roomInfo.songList}`} </p> */}
              <p>"The queue is empty" </p>
              {/* <p>Group Name: {`${props.roomInfo.name}`}</p> */}
              {/* <p>Group Owner: {`${props.roomInfo.admin}`}</p> */}
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
              <a href={`${DOMAIN}/room/${props.roomInfo.roomInfo}`}> {`${DOMAIN}/room/${props.roomInfo.roomInfo}`} </a>
            </div>
          </div>
        </div>
    );
}
  
export default RoomView;