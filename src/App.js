import React, { Component } from 'react';

import MainGame from "./components/main_game/main_game";

/**
 * Container component for the entire main_game
 */
class App extends Component {
  render() {
      return (
          <div className="App">
              <MainGame/>
          </div>
    );
  }
}

export default App;
