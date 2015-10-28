import React from 'react';

export default function(props) {
  return <div>
    <div style={{overflowY: 'auto', height: '300px'}}>
      {props.items.map((msg) => <p>{msg.from}: {msg.msg}</p>)}
    </div>
    <div>
      {props.user}:&nbsp;<input type="text" />
      <button>Отправить</button>
    </div>
  </div>
}