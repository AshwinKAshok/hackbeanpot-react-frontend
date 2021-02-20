import React, { useState} from 'react';
import LandingView from "../views/LandingView.js";
import { withRouter, Link, useRouteMatch } from 'react-router-dom';
import { Redirect } from "react-router-dom";


export default function LandingContainer(props) {

    const [state, setState] = useState({ redirect: null });


    function CreateRoomHandler(username, roomName) {
        var roomNumber = '';
        setState({ redirect: "/room" });
    };

    function AboutHandler() {
        setState({ redirect: "/about" });
    }

    if (state.redirect) {
        return <Redirect to={state.redirect} />
    } else {
        return (
            <LandingView 
            CreateRoomHandler={CreateRoomHandler}
            AboutHandler = {AboutHandler}
            />
      
          );
    }

    
}