import {types} from 'mobx-state-tree';

export const Todo = types
    .model('Todo',{
        id: types.number,
        title: '',
        done: types.boolean,
    })
    .actions(self=>({
        toggleDone(){
            self.done = !self.done;
        },
        dumpItem(){
            console.dir(self);
        },
        onTitleEdit(value: string) {
            self.title = value;
        },
        onIdChange(value: number) {
            self.id = value;
        }
    }));
    

export const ToDoStore = types
    .model('TodoStoreArray',{
        words: '',
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
       },
       setWords(value: string){
           self.words=value;
       }
    }));
    

export interface ITodoStore {
    todostore: typeof ToDoStore.Type;
}


