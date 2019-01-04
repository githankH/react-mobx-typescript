import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import {ToDoStore} from './stores/TodoStore';

const todoStore = ToDoStore.create({todos:[]});
ReactDOM.render(<App todostore={todoStore} />,document.querySelector('#root'));
