import React from 'react';
import SignInSide from './Signin';
import SignUp from './Signup';
import { useStyles } from './styles';

export default function LoginModule() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <br />
      <SignInSide />
      <SignUp />
    </div>
  );
}
