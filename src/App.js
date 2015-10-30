import React from 'react';
import Rooms from './components/Rooms';
import Chat from './components/Chat';
import Login from './components/Login';

import Server from './Server';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      userName: 'Гость',
      room: null,
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

  login(userName)
  {
    this.setState({userName});
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

  handleMessage(from, room, msg)
  {
    console.log(from, room, msg);

    if(room != this.state.room)
      return;

    var messages = this.state.messages;
    messages.push({from, msg});

    this.setState({messages});
  }

  render() {
    if(this.state.userName == null)
      return <Login onLogin={(n) => this.login(n)} />

    return <div id='app'>
      <Rooms room={this.state.room}
            items={this.state.rooms}
            onSelect={(r) => this.selectRoom(r)} />
      <Chat items={this.state.messages}
            user={this.state.userName}
            onSend={(m) => this.send(m)}
            onLogout={() => this.login(null)}/>
    </div>
  }
}