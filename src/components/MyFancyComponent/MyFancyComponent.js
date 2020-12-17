import React, { Component } from 'react';

class MyFancyComponent extends Component {
  render() {
    const name = this.props.name;
    return <div>
      <h1>Hello, {name}</h1>
    </div>;
  }
}

export default MyFancyComponent;
