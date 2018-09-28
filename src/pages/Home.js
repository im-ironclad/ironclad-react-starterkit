import React, { Component } from 'react';

// Import components
import Intro from '../components/Intro';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Intro activePage="Home Page" />
      </div>
    )
  }
}