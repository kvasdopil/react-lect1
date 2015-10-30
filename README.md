Материалы к лекции по React для Yaroslavl Frontend Meetup #10
=============================================================

В этом репозитории лежат исходники клиента и сервера, которые описаны в лекции
Ссылку на видео добавлю потом.


Заставка
========

React
или теперь я хочу опять всё переписать

Алексей Гуськов

Компания Ареал


Setup
=====
Перед презентацией на компе готово:

* открытые на фулскирин окна с увеличеными шрифтами
  * редактор
  * консоль (для копирования файлов, запуска чего-либо)
  * браузер
* подготовлен документ со шпаргалками
  * проект в состоянии “сделан npm install, работает npm start, запускается dev-server и с него показывается hello-world









Заготовка
=========

Из заготовок достали начальный проект (см. setup, 3) говорим про npm, babel, webpack - кратко в 2-3 слова что они делают.

Показываем что запускается и кажет hello world.

**Новое:** npm, package.json, babel, webpack, index.html, index.js, webpack-dev-server, npm start











React и рендеринг
=================

Подключаем React, делаем компонент в отдельном файле и рендерим его в DOM

index.js
--------
    import App from './App';
    import React from 'react';
    import ReactDOM from 'react-dom';

    ReactDOM.render(<App />, document.getElementById('root'));

App.js
------
    import React from 'react';

    export default class App extends React.Component {
      render() {
        return <div>Hello from react</div>
      }
    }

**Новое:** react, reactdom, React.Component, render, теги












Вложенные компоненты
====================

В том же файле делаем вложенный компонент, подключаем в основной.

App.js:
-------

    import React from 'react';

    class Test extends React.Component {
      render() {
        return <div>Пыщ пыщ!</div>
      }
    }

    export default class App extends React.Component {
      render() {
        return <div>
          <Test />
          <Test />
          <Test />
        </div>
      }
    }

Показываем пропс и усищи
------------------------

    import React from 'react';

    class Test extends React.Component {
      render() {
        return <div>Меня зовут {this.props.name}</div>
      }
    }

    export default class App extends React.Component {
      render() {
        return <div>
          <Test name="Вася"/>
          <Test name="Петя"/>
          <Test name="А. Вассерман"/>
        </div>
      }
    }

Переделываем компонент в функцию
--------------------------------

    ...

    function Test (props) {
      return <div>Меня зовут {props.name}</div>
    }

    ...

**Новое:** теги компонентов, props, фигурные скобки
















Начинаем писать приложение
==========================

Из заготовок достаем верстку чатика, показываем. Размещает ее просто в render у App

App.js
------
    import React from 'react';

    export default class App extends React.Component {
      render() {
        return <div>
          <div style={{float: 'right', width: 200, cursor: 'pointer'}}>
            Список комнат:
            <ul>
              <li>Общий чят</li>
              <li>Новости</li>
              <li>Домашние животные</li>
              <li>Мотороллеры</li>
              <li>Что делать если я Геннадий?</li>
            </ul>
          </div>
          <div id="messages" style={{overflowY: 'auto', height: '300px'}}>
            <p>Кайл: всем привет</p>
            <p>Кенни: привет, Кайл</p>
            <p>_^^nogibat0r9000^^_: Vsem chmoki v etom chate</p>
            <p>Стен: хай</p>
            <p>_^^nogibat0r9000^^_: Кайл, Ya tvou mamku truba shatal</p>
            <p>Кайл: фигачо, мне вернули мой 2007!!!</p>
          </div>
          <div>
            Кайл:
            <input type="text" />
            <button>Отправить</button>
          </div>
        </div>
      }
    }

**Новое:** сначала пишем вёрстку, потом создаём структуру компонентов (прям как в старые времена php), стили в react















Как ходят данные
================

Из заготовок достаем демо-стейт приложения,

App.js
------
    ...
    var data = {
      user: 'Загадочный ловелас',
      room: 'Общий чат',
      rooms: [
        'Общий чят',
        'Новости',
        'Домашние животные',
        'Мотороллеры',
        'Что делать если я Геннадий?'
      ],
      messages: [
        {from: 'Кайл', msg: 'всем привет!!'},
        {from: 'Кенни', msg: 'ыыыы'},
        {from: '_^^nogibat0r9000^^_', msg: 'ыыыыыы!!'},
        {from: 'Стен', msg: 'ЫЫЫЫЫЫ!'},
        {from: '_^^nogibat0r9000^^_', msg: 'sss111111'},
        {from: 'Кайл', 'яснопонятно =('}
      ]
    };
    ...

Руками внедряем его в нужные компоненты.
----------------------------------------
Показываем как можно в верстке делать map и т.п.

    return <div>
          <div style={{float: 'right', width: 200, cursor: 'pointer'}}>
            Список комнат:
            <ul>
              {data.rooms.map(function(room) {
                return <li>{room}</li>
              })}
            </ul>
          </div>
          <div id="messages" style={{overflowY: 'auto', height: '300px'}}>
            {data.messages.map(function(msg) {
              return <p>{msg.from}: {msg.msg}</p>
            })}
          </div>
          <div>
            {data.user}:
            <input type="text" />
            <button>Отправить</button>
          </div>
        </div>

Переделываем вторую функцию в стрелочную
----------------------------------------

**Новое:** map, стрелочная функция, стелочная функция с неявным return









Разбиваем на компоненты
=======================

Разбиваем верстку на компоненты.
Руками показываем компонент Rooms.

Rooms.js
--------

    import React from 'react';

    export default function(props)
    {
      <div style={{float: 'right', width: 200, cursor: 'pointer'}}>
        Список комнат:
        <ul>
          {props.items.map((name) => {
            if(name == props.room)
              return <li onClick={() => props.onSelect(name)}><b>[ {name} ]</b></li>

            return <li onClick={() => props.onSelect(name)}>{name}</li>
          })}
        </ul>
      </div>
    }

Chat.js
-------
    import React from 'react';

    export default function(props)
    {
      return <div style={{overflowY: 'auto', height: '300px'}}>
        {props.items.map((msg) => <p>{msg.from}: {msg.msg}</p>)}

        <div>
          {props.user}:
          <input type="text" />
          <button>Отправить</button>
        </div>
      </div>
    }

App.js
------

    import Rooms from 'components/Rooms';
    import Chat  from 'components/Chat';

    ...
    selectRoom(room)
    {
      console.log(room);
    }

    render()
    {
      ...

      return <div>
        <Rooms room={data.room} items={data.rooms} onClick={(r) => this.selectRoom(r)} />
        <Chat items={data.messages} user={data.user}/>
      </div>
    }
    ...


**Новое:** коллбеки, стрелочные функции в колбеках







Прикручиваем состояние
======================

App.js
------

    ...
    constructor()
    {
      super();

      this.state = {...}
    }

    ...

    selectRoom(room) {
      this.setState({room:room});
    }

    ...

    return <div>
      <Rooms room={this.state.room} items={this.state.rooms} onSelect={(r) => this.selectRoom(r)} />
      <Chat items={this.state.messages} user={this.state.user} />
    </div>

Новое: идея разделения тупых (view) и умных (controller) компонентов, стейт, мутаторы, иммутабл стейт, сетстейт









Достаём разбитый на компоненты чатик
====================================

Из заготовок достаем разбитый на компоненты чатик. Показываем.

Chat.js
=======
    import React from 'react';

    export default class Chat
    {
      send() {
        var el = document.getElementById('msgtext');

        this.props.onSend(this.props.user, el.value);
        el.value = '';
      }

      render() {
        return <div style={{overflowY: 'auto', height: '300px'}}>
          {props.items.map((msg) => <p>{msg.from}: {msg.msg}</p>)}

          <div>
            {props.user}:
            <input id="msgtext" type="text" />
            <button onClick={() => this.send()}>Отправить</button>
          </div>
        </div>
      }
    }

App.js
======
    ...

    send(from, msg)
    {
      console.log('msg from', from, msg);
    }

    handleMsg(from, room, msg)
    {
      if(room != this.state.room)
            return;

      var messages = this.state.messages;
      messages.push({from, msg});

      this.setState({messages});
    }

    ...

    return <div>
      <Rooms room={this.state.room}
            items={this.state.rooms}
            onSelect={(r) => this.selectRoom(r)} />
      <Chat items={this.state.messages}
            user={this.state.user}
            onSend={(m) => this.send(m)} />
    </div>


В этот момент у нас есть рабочий чатик но без сервера, на демо-данных.
Мы можем писать в чат с какого-то захардкоженого логина (Гость), выбирать комнату.

**Новое:** ещё раз про иммутабельный стейт






Форма смена логина
==================

Руками делаем форму входа и применяем условную верстку - если нет логина показываем форму, если есть - чат и комнаты

**Новое:** условная вёрстка

Login.js
--------
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

Chat.js
-------
    ...
    <button onClick={() => this.onLogout()}>{props.user}</button>

App.js
------
    ...

    login(user)
    {
      this.setState({user});
    }

    ...

    if(this.state.user == null)
      return <Login onLogin={(n) => this.login(n)} />

    return <div>
      <Rooms room={this.state.room}
            items={this.state.rooms}
            onSelect={(r) => this.selectRoom(r)} />
      <Chat items={this.state.messages}
            user={this.state.user}
            onSend={(m) => this.send(m)}
            onLogout={() => this.login(null)}/>
    </div>






Добавляем серверные апи
=======================

Достаем из заготовок пример с рабочим сервером. Показываем что мы создаем его в componentDidMount

Server.js
---------
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

App.js
------
    import Server from 'Server';

    componentDidMount()
    {
      this.server = new Server();
      this.server.onMessage = (f,c,m) => this.handleMessage(f,c,m);
      this.server.onListChats = (l) => this.handleList(l);
    }

    handleList(rooms)
    {
      this.setState({rooms});
      this.selectRoom(rooms[0]);
    }

    send(from, msg)
    {
      this.server.send(from, this.state.room, msg);
    }

    selectRoom(room)
    {
      this.setState({
        room,
        messages: []
      });

      this.server.getLog(room, (messages) => this.setState({messages}));
    }

**Новое:** куда складывать либы, componentDidMount






Конец
=====

С вами был Алексей Гуськов

@lexaguskov

https://github.com/kvasdopil/react-lect1



Итого: плюсы и минусы React
====================

*Плюсы:*
+ простой, решает только задачу отображения view
+ быстрый, хорошая реализация vdom
+ однонаправленный
+ легко тестировать
+ легко делать server-side rendering
+ легко интегрируется с bootstrap\material-ui\semantic-ui и т.п.
+ легко обучать сотрудников (особенно выросших из php)

*Минусы:*
- работает совсем не так как jquery
- нужно юзать оптимизации
- immutable state это не очень просто

