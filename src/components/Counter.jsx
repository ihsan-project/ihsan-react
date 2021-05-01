import React, { useContext } from 'react';
import { store } from '../libs/store';

const Counter = (props) => {
  const globalState = useContext(store);

  return (
    <div>
      Count {props.count}
    </div>
  );
}

export default Counter;
