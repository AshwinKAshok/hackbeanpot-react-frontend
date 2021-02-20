import './App.css';
import RoomContainer from './containers/RoomContainer.js';
import LandingContainer from './containers/LandingContainer.js';
import AboutContainer from './containers/AboutContainer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/room">Room</Link>
            </li>
          </ul>
        </nav> */}


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutContainer />
          </Route>
          <Route path="/room/:roomNumber" render={(props)=> <RoomContainer{...props} />} >
          </Route>
          <Route path="/">
            <LandingContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
