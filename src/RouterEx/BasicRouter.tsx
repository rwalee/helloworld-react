import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NestedRouter from './NestedRouter';

export default function BasicRouter() {
  let bb = '';
  const fun3 = (aa: string) => {
    bb = 'a';
    return aa;
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              {NestedRouter({ aa: 'asdf' })}
              <NestedRouter aa="asdf" />
              {aa()}
              {/* <aa /> // Impossible*/}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export function aa() {
  return <div>aa</div>;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const fun1 = (aa: string) => {
  return aa;
};

function fun2(aa: string) {
  return aa;
}
