import React, { useContext } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';

import Login from './containers/Login'

import { store } from './libs/store';

const App = () => {
  const globalState = useContext(store);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Login />
    </>
  );
}

export default App;
