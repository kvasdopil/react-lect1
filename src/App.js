import React from 'react';
import Person from './components/Person'
import PersonList from './components/PersonList'

export default class App extends React.Component {
  render() {
    return <PersonList title="Список щщей">
      <Person name="Кайл" />
      <Person name="Картман" />
      <Person name="Стен"/>
      <Person name="Кенни"/>
    </PersonList>
  }
}