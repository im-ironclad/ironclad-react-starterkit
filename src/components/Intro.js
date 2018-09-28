import React, { Component } from 'react';

class Intro extends Component {  
  render() {
    return(
      <h1 className="intro__heading">
        This is the intro component on the {this.props.activePage}
      </h1>
    )
  }
}

export default Intro;