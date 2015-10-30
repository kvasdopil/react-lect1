import React from 'react';

export default function(props)
{
  return <div>
    Ваше имя: <input type="text" id="login" defaultValue="Гость" />
    <button onClick={() => props.onLogin(document.getElementById('login').value)}>
      Войти
    </button>
  </div>
}