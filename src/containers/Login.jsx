import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import Counter from '../components/Counter';
import { Context as LoadingContext } from '../contexts/loadingContext';

const Login = () => {
  const { isLoading, toggleLoading } = useContext(LoadingContext);
  // eslint-disable-next-line no-console
  console.log('isLoading: ', isLoading);

  /*
   * count is our state variable
   * count will have a default state of 0
   * count will be updated using the setCount function
   */
  const [count, setCount] = useState(0);

  const incrementer = () => setCount(count + 1);

  return (
    <>
      <div>Hello!</div>
      <Counter count={count} />
      <Button
        onClick={() => {
          incrementer();
          toggleLoading();
        }}>
        Increment
      </Button>
    </>
  );
};

export default Login;
