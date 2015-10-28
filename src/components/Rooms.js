import React from 'react';

export default function(props)
{
  return <div style={{float:'right', width: 200, cursor: 'pointer'}}>
    Список комнат:
    <ul>
      {props.items.map((name) => {
        if(name == props.room)
          return <li><b><span onClick={() => props.onSelect(name)} >{name}</span></b></li>

        return <li><span onClick={() => props.onSelect(name)} >{name}</span></li>
      })}
    </ul>
  </div>
}