import React from 'react';
import Rooms from './components/Rooms'
import Chat from './components/Chat'

export default class App extends React.Component {
  onSend(msg)
  {
    console.log('send: ', 'вася пупкин', 'Общий чат', msg);
  }

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
      <Rooms room={data.room} items={data.rooms} />
      <Chat items={data.messages} user={data.userName} onSend={this.onSend}/>
    </div>
  }
}