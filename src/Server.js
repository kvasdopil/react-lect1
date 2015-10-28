export default class Server
{
  constructor()
  {
    this.server = window.io('http://'+document.location.hostname+':8088');

    this.server.on('new', (m) => this.onMessage(m.from, m.room, m.msg));
    this.server.on('log', (l) => this.onLog(l));
    this.server.on('list', (m) => this.onListChats(m));

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

  onLog(log)
  {
    if(!log)
      log = [];

    if(this.logcb)
      this.logcb(log);
  }

  onListChats(list)
  {
  }
}