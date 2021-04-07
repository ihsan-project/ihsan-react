import React from 'react';
import './App.css';
import Counter from './components/Counter'
import { Button } from '@material-ui/core';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementer() {
    let currentCount = this.state.count;
    currentCount++;

    this.setState(state => ({
      count: currentCount
    }));
  }

  render() {
    return (
      <>
        <div>
          Hello {this.props.name}
        </div>
        <Counter count={ this.state.count }/>
        <Button onClick={() => { this.incrementer() }} >Primary</Button>
      </>
    );
  }
}

export default App;
