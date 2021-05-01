import React, { useState, useContext } from 'react';
import Counter from '../components/Counter'
import { Button } from '@material-ui/core';
import { store } from '../libs/store';

const Login = (props) => {
  /*
   * count is our state variable
   * count will have a default state of 0
   * count will be updated using the setCount function
   */
  const [count, setCount] = useState(0);

  const incrementer = () => setCount(count + 1)

  const globalState = useContext(store);
  const { dispatch } = globalState;

  return (
    <>
      <div>
        Hello {props.name}
      </div>
      <Counter count={ count }/>
      <Button onClick={ () => {
        incrementer();
        dispatch({ type: 'displayLoading' });
      } }>Increment</Button>
    </>
  );
}

export default Login;
