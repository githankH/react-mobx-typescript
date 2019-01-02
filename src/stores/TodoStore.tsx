import {types} from 'mobx-state-tree';

const Todo = types
    .model('Todo',{
        id: types.number,
        title: '',
        done: types.boolean,
    })
    .actions(self=>({
        toggleDone(){
            self.done = !self.done;
        },
        enableLog(value: any){
            console.log(value);
        },
        onTitleChange(value: string) {
            self.title = value;
        },
        onIdChange(value: number) {
            self.id = value;
        }
    }));
    

const ToDoStore = types
    .model('TodoStoreArray',{
        todos: types.array(Todo),
    })
    .views(self=>({
       get todosCount() {
           return self.todos.length;
       },
       get compeletTodosCounts() {
           return self.todos.filter(todo=>todo.done===true).length;
       }
    }))
    .actions(self=>({
       addTodo(newItem: typeof Todo.Type | typeof Todo.SnapshotType) {
          self.todos.push(newItem);
       },
       deleteTodo(id: number) {
          return self.todos.filter(todo=> todo.id !== id);
       }
    }));
    
export const todoStore = ToDoStore.create({todos:[]});

export interface ITodoStore {
    todostore: typeof ToDoStore.Type;
}


