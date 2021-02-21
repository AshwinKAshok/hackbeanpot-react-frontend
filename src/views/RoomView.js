import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import '../App.css';
import { DOMAIN } from "../common";

const RoomView = (props) => {
    console.log(props);
    return (
        <div>
          <div>
              <p>"No Song Playing" </p>
          </div>
          <div className="float-container">
            <div className="float-child">
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
              <a href={`${DOMAIN}/room/${props.roomInfo.roomNumber}`}> {`${props.roomInfo.roomNumber}`} </a>
            </div>
          </div>
        </div>
    );
}
  
export default RoomView;