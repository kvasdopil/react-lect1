import React from 'react';

export default class PersonList  extends React.Component {
  render() {
    return <div>
      <h3>{this.props.title}</h3>
      <ul>
        {this.props.children}
      </ul>
    </div>
  }
}