import React from 'react';
import Rooms from './components/Rooms'
import Chat from './components/Chat'

import Server from './Server';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      userName: 'Загадочный ловелас',
      room: 'Общий чят',
      rooms: ['Общий чят', 'Машинки', 'Котики', 'Голые женщины 18+', 'ТФКП'],
      messages: [
        {from: 'Вася', msg: 'Привет'}
      ]
    };
  }

  componentDidMount()
  {
    this.server = new Server();
    this.server.onMessage = (f,c,m) => this.handleMessage(f,c,m);
  }

  send(msg)
  {
    this.server.send(this.state.userName, this.state.room, msg);
  }

  selectRoom(room)
  {
    this.setState({
      room,
      messages: null
    });

    this.server.getLog(room, (messages) => this.setState({messages}));
  }

  handleMessage(from, chat, msg)
  {
    var messages = this.state.messages;
    messages.push({from, msg});

    this.setState({messages});
  }

  render() {
    return <div id='app'>
      <Rooms room={this.state.room} items={this.state.rooms} onSelect={(r) => this.selectRoom(r)} />
      <Chat items={this.state.messages} user={this.state.userName} onSend={(m) => this.send(m)} />
    </div>
  }
}