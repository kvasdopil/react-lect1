import React from 'react';

export default class Chat extends React.Component {
  onSend()
  {
    var el = document.getElementById('chatmsg');
    this.props.onSend(el.value);

    el.value = '';
  }

  renderLine(msg)
  {
    return <p>{msg.from}: {msg.msg}</p>
  }

  renderChat()
  {
    return <div style={{overflowY: 'auto', height: '300px'}}>
      {(this.props.items == null) ?
        <span>Загружаемся...</span> : this.props.items.map(this.renderLine)}
    </div>
  }

  renderMsgBox()
  {
    return <div>
      {this.props.user}:&nbsp;<input id='chatmsg' type="text" />
      <button onClick={() => this.onSend()}>Отправить</button>
    </div>
  }

  render() {
    return <div>
      {this.renderChat()}
      {this.renderMsgBox()}
    </div>
  }
}
