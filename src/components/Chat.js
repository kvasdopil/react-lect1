import React from 'react';

export default function(props) {
  return <div style={{overflowY: 'auto', height: '300px'}}>
    {props.items.map((msg) => <p>{msg.from}: {msg.msg}</p>)}
  </div>
}