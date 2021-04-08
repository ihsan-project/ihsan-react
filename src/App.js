import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
import { Button } from '@material-ui/core';

const App = (props) => {
  /*
   * count is our state variable
   * count will have a default state of 0
   * count will be updated using the setCount function
   */
  const [count, setCount] = useState(0);

  const incrementer = () => setCount(count + 1)

  return (
    <>
      <div>
        Hello {props.name}
      </div>
      <Counter count={ count }/>
      <Button onClick={ incrementer }>Increment</Button>
    </>
  );
}

export default App;
