import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import Main from './Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <Main />
      </div>
    );
  }
}

export default App;
