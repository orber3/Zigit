import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../Actions/LoginAction';
import { CardMedia } from '@material-ui/core';
import image from './loginPic.jpeg';
import Login from './LoginForm';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    form: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      width: '97%',
      marginLeft: theme.spacing(1),
    },
    paper: {
      height: 450,
      width: 450,

      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      marginTop: theme.spacing(3),
      width: '100%',
    },
    image: {
      width: '100%',
    },
  })
);

const LoginComponent = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;

  return (
    <Grid className={classes.root} justifyContent="center" alignItems="center">
      <Paper className={classes.paper}>
        <img src={image} alt="Smiley face" className={classes.image} />

        <div className={classes.picture} id="loginPic" />

        <Login history={history} />
      </Paper>
    </Grid>
  );
};

export default LoginComponent;
