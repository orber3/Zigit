import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage } from '@hookform/error-message';
import { LoginAction } from '../Actions/LoginAction';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginBottom: theme.spacing(1),
    justifyContent: 'space-evenly',
    height: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    backgroundColor: '#d9ebf9',
  },

  button: {
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
}));

const defaultValues = {
  email: 'example@example.com',
  password: '1234',
};

const Login = () => {
  let history = useHistory();

  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error } = loginReducer;
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues,
    rules: { required: true },
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(LoginAction(email, password));
    history.push('/info');
  };
  return (
    <div className={classes.root}>
      {error ? `${error}` : ''}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          name={'email'}
          control={control}
          render={({ email }) => (
            <TextField
              {...email}
              margin="normal"
              className={classes.textField}
              label="Email "
              variant="outlined"
              fullWidth
              {...register('email', {
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'use email pattern',
                },
              })}
            />
          )}
        />
        <ErrorMessage errors={errors} name="email" />

        <Controller
          name={'password'}
          control={control}
          render={({ password }) => (
            <TextField
              {...password}
              margin="normal"
              className={classes.textField}
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              {...register('password', {
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/,
                  message:
                    ' password should be 8 characters long, contain 1 number and 1 upper case .',
                },
              })}
            />
          )}
        />
        <ErrorMessage errors={errors} name="password" />
        <Button
          variant="contained"
          type="submit"
          style={{ width: '100%' }}
          color="primary"
        >
          {loading ? 'LOADING...' : 'LOGIN'}
        </Button>
      </form>
    </div>
  );
};

export default Login;
