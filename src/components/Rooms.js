import React from 'react';

export default function(props)
{
  return <div style={{float:'right'}}>
    Список комнат:
    <ul>
      {props.items.map((name) => {
        if(name == props.room)
          return <li><b>[ {name} ]</b></li>

        return <li>{name}</li>
      })}
    </ul>
  </div>
}