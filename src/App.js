import React from 'react';
import Person from './components/Person'
import PersonList from './components/PersonList'

export default class App extends React.Component {
  render() {
    var data = {
      userName: 'Загадочный ловелас',
      room: 'Общий чат',
      rooms: ['Общий чат', 'Вася', 'Петя', 'Маша', 'Ираида Петровна'],
      messages: [
        {from: 'Вася', msg: 'Привет'},
        {from: 'Вася', msg: 'Привет'},
        {from: 'Ловелас', msg: 'Медвед'},
        {from: 'Вася', msg: 'Привет'},
        {from: 'Вася', msg: 'Привет'},
        {from: 'Вася', msg: 'Привет'},
        {from: 'Вася', msg: 'Привет'}
      ]
    };

    return <div id='app'>
      Вы вошли как <strong>{data.userName}</strong>
      <div id="users" style={{float:'right'}}>
        Список комнат:
        <ul>
          {data.rooms.map((name) => {
            if(name == data.room)
              return <li><b>[ {name} ]</b></li>

            return <li>{name}</li>
          })}
        </ul>
      </div>
      <div id="messages" style={{overflowY: 'auto', height: '300px'}}>
        {data.messages.map((msg) => <p>{msg.from}: {msg.msg}</p>)}
      </div>
      <div>
        <input type="text" />
        <button>Отправить</button>
      </div>
    </div>
  }
}