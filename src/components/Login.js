import React from 'react';

export default function(props)
{
  return <div>
    Ваше имя: <input type="text" id="login" defaultValue="Черный властелин" />
    <button onClick={() => props.onLogin(document.getElementById('login').value)}>
      Войти
    </button>
  </div>
}