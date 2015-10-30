import React from 'react';

export default class Chat extends React.Component {
  send()
  {
    var el = document.getElementById('chatmsg');
    this.props.onSend(el.value);

    el.value = '';
  }

  logout()
  {
    this.props.onLogout();
  }

  renderChat()
  {
    console.log(this.props);
    return <div style={{overflowY: 'auto', height: '300px'}}>
      {this.props.items.map((msg) =>
        <p>{msg.from}: {msg.msg}</p>
      )}
    </div>
  }

  renderMsgBox()
  {
    return <div>
      <button onClick={() => this.logout()}>{this.props.user}:</button>
      <input id='chatmsg' type="text" />
      <button onClick={() => this.send()}>Отправить</button>
    </div>
  }

  render() {
    return <div>
      {this.renderChat()}
      {this.renderMsgBox()}
    </div>
  }
}
