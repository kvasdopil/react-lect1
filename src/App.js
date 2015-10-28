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
      room: '',
      rooms: [],
      messages: []
    };
  }

  componentDidMount()
  {
    this.server = new Server();
    this.server.onMessage = (f,c,m) => this.handleMessage(f,c,m);
    this.server.onListChats = (l) => this.handleList(l);
  }

  send(msg)
  {
    this.server.send(this.state.userName, this.state.room, msg);
  }

  selectRoom(room)
  {
    this.setState({
      room,
      messages: []
    });

    this.server.getLog(room, (messages) => this.setState({messages}));
  }

  handleList(rooms)
  {
    console.log('rooms', rooms);
    this.setState({rooms});
    this.selectRoom(rooms[0]);
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