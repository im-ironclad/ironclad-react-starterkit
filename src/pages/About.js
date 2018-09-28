import React, { Component } from 'react'

// Import components
import Intro from '../components/Intro';

export default class About extends Component {
  render() {
    return (
      <div>
        <Intro activePage="About Page" />
      </div>
    )
  }
}