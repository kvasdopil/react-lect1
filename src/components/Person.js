import React from 'react';
export default class Person extends React.Component {
  render() {
    return <li>[boy] {this.props.name}</li>
  }
}