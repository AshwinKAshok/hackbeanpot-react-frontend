import React from 'react';
import { useState} from 'react';
import AboutView from '../views/AboutView.js';
import LandingView from "../views/LandingView.js";
import { Redirect } from "react-router-dom";

export default function AboutContainer(props) {

  const [state, setState] = useState({ redirect: null });

  function LandingHandler() {
    setState({ redirect: '/'});
  }
  if (state.redirect) {
    return <Redirect to={state.redirect} />
  }
  else {
    return (
      <AboutView
      LandingHandler = {LandingHandler}
      />
    );
  }
}