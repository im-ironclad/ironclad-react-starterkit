import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/App.scss';

// Import pages
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));