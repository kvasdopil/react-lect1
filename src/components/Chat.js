import React from 'react';

export default class Chat extends React.Component {
  onSend()
  {
    var el = document.getElementById('chatmsg');
    this.props.onSend(el.value);

    el.value = '';
  }

  renderChat()
  {
    return <div style={{overflowY: 'auto', height: '300px'}}>
      {this.props.items.map((msg) => <p>{msg.from}: {msg.msg}</p>)}
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
