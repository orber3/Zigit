import LoginComponent from '../Components/LoginComponent';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import InfoPage from './InfoPage';

const useStyles = makeStyles((theme) => ({
  grid: {
    minWidth: '600px',
    display: 'flex',
    minHeight: '600px',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Main = ({ history }) => {
  const classes = useStyles();
  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push('/info');
  //   }
  // }, [history, userInfo]);

  return (
    <Grid className={classes.grid}>
      {!userInfo ? <LoginComponent /> : <InfoPage />}
    </Grid>
  );
};

export default Main;
