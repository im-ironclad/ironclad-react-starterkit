import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Import styles
import './styles/App.scss';

// Import pages
import Home from './pages/Home';
import About from './pages/About';

// Import Architecture Components
import Nav from './components/Nav';

class App extends Component {

  // Router can only have one child, so wrap everything in main
  render() {
    return (
      <BrowserRouter>
        <div className="main__cont">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));