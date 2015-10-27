import React from 'react';
import Person from './components/Person'
import PersonList from './components/PersonList'

export default class App extends React.Component {
  render() {
    return <div id='app'>
      Вы вошли как <strong>Загадочный ловелас</strong>
      <div id="users" style={{float:'right'}}>
        Список комнат:
        <ul>
          <li>Общая</li>
          <li>Кайл</li>
          <li>Эрик</li>
          <li>Кенни</li>
          <li>Анатолий Вассерман</li>
        </ul>
      </div>
      <div id="messages" style={{overflowY: 'auto', height: '300px'}}>
        <p>Кайл: всем привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
        <p>Вы: и тебе привет</p>
      </div>
      <div>
        <input type="text" />
        <button>Отправить</button>
      </div>
    </div>
  }
}