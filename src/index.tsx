import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import {todoStore} from './stores/TodoStore';

todoStore.addTodo({
    id:200,
    title: 'sjdlfk',
    done: false,
});

ReactDOM.render(<App todostore={todoStore} />,document.querySelector('#root'));
