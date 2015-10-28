export default class Server
{
  constructor()
  {
    this.server = window.io('http://192.168.17.202:88');
    this.server.on('new', (m) => this.onMessage(m.from, m.root, m.msg));

    console.log('Server: Подключаюсь');
  }

  send(from, room, msg)
  {
    this.server.emit('msg', {from, room, msg});
  }

  onMessage(from, room, msg)
  {
    console.log('Server: Пришло сообщение а какое не скажу');
  }
}