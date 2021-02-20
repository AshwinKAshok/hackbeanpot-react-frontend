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
            <p> "Queue" </p>
            <p> "The queue is empty" </p>
          </div>
          <div className="float-child">
            <div>
              <h1>Voting</h1>
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
            <a href={`${DOMAIN}/room/${props.roomInfo}`}> {`${DOMAIN}/room/${props.roomInfo}`} </a>
          </div>
        </div>
      </div>
    );
}
  
export default RoomView;