import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SignInSide from './Signin';
import SignMsg from './SignMsg';
import SignUp from './Signup';
import { useStyles } from './styles';

export default function LoginModule() {
  const classes = useStyles();
  const [err, setErr] = useState('signin');

  return (
    <Router>
      <div className={classes.background}>
        <br />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/loginMsg">
            <SignMsg err={err} />
          </Route>
          <Route path="/">
            <SignInSide setErr={setErr} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
