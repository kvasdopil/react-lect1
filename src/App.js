import React from 'react';
import Person from './components/Person'

export default class App extends React.Component {
  render() {
    return <div>
      <ul>
        <Person name="Кайл" />
        <Person name="Картман" />
        <Person name="Стен"/>
        <Person name="Кенни"/>
      </ul>
    </div>
  }
}