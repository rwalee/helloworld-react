import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Material from './Views/Material';
import BasicRouter from './RouterEx/BasicRouter';
import NestedRouter from './RouterEx/NestedRouter';
import QueryParamsExample from './RouterEx/QueryParam';
import SignInSide from './Mobx/Signin';
import SignUp from './Mobx/Signup';
import LoginModule from './Mobx/LoginModule';
ReactDOM.render(<LoginModule />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
