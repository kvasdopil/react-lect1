import React from 'react';
import Rooms from './components/Rooms'
import Chat from './components/Chat'

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      userName: 'Загадочный ловелас',
      room: 'Общий чат',
      rooms: ['Общий чат', 'Вася', 'Петя', 'Маша', 'Ираида Петровна'],
      messages: [
        {from: 'Вася', msg: 'Привет'}
      ]
    };
  }

  onSend(msg)
  {
    console.log('send: ', 'вася пупкин', 'Общий чат', msg);
    this.handleMessage(this.state.userName, this.state.room, msg);
  }

  handleMessage(from, chat, msg)
  {
    var messages = this.state.messages;
    messages.push({from, msg});

    this.setState({messages});
  }

  render() {
    return <div id='app'>
      <Rooms room={this.state.room} items={this.state.rooms} />
      <Chat items={this.state.messages} user={this.state.userName} onSend={(m) => this.onSend(m)}/>
    </div>
  }
}