import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FirePlaceIcon from '@material-ui/icons/Fireplace';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "DarkOrange",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LandingView(props) {
  const classes = useStyles();
  const [userInput, setUserInput] = useState("");
  const [roomName, setRoomName] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h1">
          CampfireQueue
        </Typography>
        <Avatar className={classes.avatar}>
            {/* TODO: Change this icon later */}
          <FirePlaceIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome!
        </Typography>
        <Typography component="h2" variant="h6">
        To start listening to music with friends, give yourself a name and click the button below!
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            onChange={(e) => setUserInput(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="roomName"
            label="Room Name"
            name="roomName"
            onChange={(e) => setRoomName(e.target.value)}
            autoFocus
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              props.createRoomHandler(userInput, roomName)}}
          >
            Make a Room
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {props.aboutHandler()}}
            >
            About Us
          </Button>
        </form>
      </div>
    </Container>
  );
}