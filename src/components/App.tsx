import * as React from 'react';
import {observer} from 'mobx-react';

import {ITodoStore, Todo} from '../stores/TodoStore';

class App extends React.Component<ITodoStore, {}> {
    
    onChangeHandler = (e:React.FormEvent<HTMLInputElement>)=>{
        const {value}:  HTMLInputElement = e.currentTarget;
        const {todostore} = this.props;

        todostore.setWords(value);

    }

    onKeyPressHandler = (e: React.KeyboardEvent) =>{
        if(e.key !== 'Enter'){
            return;
        }
        const {value}: any = e.currentTarget;
        this.props.todostore.addTodo({
            id: Math.floor(Math.random()*200)+1,
            title: value,
            done: false
        });
        this.props.todostore.setWords('');
    }

    /* better pattern, 'currying style'
    */
    onItemClcik= (item: typeof Todo.Type)=>(e: React.SyntheticEvent)=>(
        item.dumpItem());
        //console.log(item.title));
    /* 
    onItemClcik(item: typeof Todo.Type){
        console.log(item.title);
    }
    */

    renderItems():JSX.Element{
        const {todos} = this.props.todostore;
        return(
           //lower the UI render performance
           //<span onClick={this.onItemClcik.bind(this,item)}>{item.id}: {item.title}</span>
           <ul>{
               todos.map((item)=>(
                   <li key={item.id}>
                      <span onClick={this.onItemClcik(item)}>{item.id}: {item.title}</span>
                   </li>
                ))               
           }</ul>
        );
    }
	
    render(): JSX.Element{
        //console.log(this.props);
        const  words= this.props.todostore.words;
        return(
             <div>
                 Total   : {this.props.todostore.todosCount}
                 <br />
                 Complete: {this.props.todostore.compeletTodosCounts}
				 <br />
                 <input type='text' 
                        name='todotitle'  
                        value={words}
                        placeholder='show something'
                        onChange={this.onChangeHandler} 
                        onKeyPress={this.onKeyPressHandler}
                 />
                 <hr />
                 {this.renderItems()}
             </div>
        );

    }

}

export default observer(App);