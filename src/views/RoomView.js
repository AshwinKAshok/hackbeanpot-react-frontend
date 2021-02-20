import React from 'react';
import { Button } from '@material-ui/core';
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
            <p> "Share this room w/ friends!" </p>
            <p> "TODO: Put the URL here somehow" </p>
          </div>
        </div>
      </div>
    );
}
  
export default RoomView;