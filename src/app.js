import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          React Boilerplate
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));