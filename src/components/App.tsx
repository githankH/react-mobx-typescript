import * as React from 'react';
import {observer} from 'mobx-react';

import {ITodoStore} from '../stores/TodoStore';

class App extends React.Component<ITodoStore, {}> {
    
    onChangeHandler = (e:React.FormEvent<HTMLInputElement>)=>{
        const {value}:  HTMLInputElement = e.currentTarget;
        const {todostore} = this.props;

        todostore.todos[0].onTitleChange(value);
        todostore.todos[0].onIdChange(Math.floor(Math.random()*200)+1);
        
/*         const item = {
            id: Math.floor(Math.random()*200)+1,
            title: value,
            done: false
        };
        this.props.todostore.addTodo(item); */
	}
	
    render(): JSX.Element{
        //console.log(this.props);
        const {id ,title, done} = this.props.todostore.todos[0];
        return(
             <div> 
                 {id}
                 <br />
                 {title}
				 <br />
                 {done.toString()}
				 <br />
				 <input type='text' name='todotitle'  value={title} onChange={this.onChangeHandler} />
             </div>
        );

    }

}

export default observer(App);