import React, { useState} from 'react';
import LandingView from "../views/LandingView.js";
import { withRouter, Link, useRouteMatch } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import {API_URL } from "../common";

export default function LandingContainer(props) {

    const [state, setState] = useState({ redirect: null });

    async function createRoomHandler(username, roomName) {
        await fetch(API_URL + `/room/name/${roomName}/admin/${username}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(async response => await response.json())
        .then(response  => {
            setState({ redirect: `/room/${response.roomNumber}` });
        }).catch(err => console.log(err));
    };

    function aboutHandler() {
        setState({ redirect: "/about" });
    }

    if (state.redirect) {
        return <Redirect to={state.redirect} />
    } else {
        return (
            <LandingView 
            createRoomHandler={createRoomHandler}
            aboutHandler={aboutHandler}
            />
      
          );
    }

    
}