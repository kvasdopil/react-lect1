export default class Server
{
  constructor()
  {
    this.server = window.io('http://192.168.17.202:88');
    this.server.on('new', (m) => this.onMessage(m.from, m.root, m.msg));
    this.server.on('log', (m) => this.onLog(m.room, m.log));

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

  getLog(room, cb)
  {
    this.server.emit('getlog', room);
    this.logcb = cb;
  }

  onLog(room, log)
  {
    if(!log)
      log = [];

    if(this.logcb)
      this.logcb(log);
  }
}