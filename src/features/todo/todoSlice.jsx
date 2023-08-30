import { createSlice, nanoid} from '@reduxjs/toolkit';

const initialState= {
    todos: [{id: 1, text: 'hello'},{id: 2, text: 'world'},{id: 3, text:'welcome'}],
}

export const todoSlice= createSlice({
    name: 'todo', 
    initialState,
    reducers:{
        addTodo: (state, action)=>{
           const todo= {
            id: nanoid(),
            text: action.payload,
           }
           state.todos.push(todo);
        },
        updateTodo: (state, action)=>{
            state.todos.map((todo)=>{
                console.log(todo);
                if(todo.id == action.payload.id) {
                    todo.id = action.payload.id
                    todo.text = action.payload.text
                }
            })
        },
        removeTodo: (state, action)=>{
            state.todos= state.todos.filter((todo)=>
                todo.id !== action.payload);
        }
    }

});

export const { addTodo,updateTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer