import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div>
        Count {this.props.count}
      </div>
    );
  }
}

export default Counter;
