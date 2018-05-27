import React, { Component } from 'react';
import HotKeysDemo from './components/editor/active_line';
// import hotkeys from 'hotkeys-js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HotKeysDemo/>
      </div>
    );
  }
}

export default App;
