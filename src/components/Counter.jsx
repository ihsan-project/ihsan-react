import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const { count } = props;

  return (
    <div>
      Count {count}
    </div>
  );
}


Counter.propTypes = {
  count: PropTypes.number.isRequired
};

export default Counter;
