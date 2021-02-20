import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import '../App.css';

const RoomView = (props) => {

    return (
      <div>
        <div>
            <p>"No Song Playing" </p>
        </div>
        <div class="float-container">
          <div class="float-child">
            <Button variant="contained" color="primary">
                + Add to the queue
            </Button>
            <p> "Queue" </p>
            <p> "The queue is empty" </p>
          </div>
          <div class="float-child">
            <div>
              <h1>Voting</h1>
              <List>
                <ListItem>
                  <Button variant="contained" color="secondary" fullWidth="true">
                    Song 1
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="contained" color="secondary" fullWidth="true">
                    Song 1
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="contained" color="secondary" fullWidth="true">
                    Song 1
                  </Button>
                </ListItem>
            </List>
            </div>
            <p> "Share this room w/ friends!" </p>
            <p> "TODO: Put the URL here somehow" </p>
          </div>
        </div>
      </div>
    );
}
  
export default RoomView;