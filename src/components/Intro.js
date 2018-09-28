import React, { Component } from 'react';

export default class Intro extends Component {  
  render() {
    return(
      <h1 className="intro__heading">
        This is the intro component on the {this.props.activePage}
      </h1>
    )
  }
}