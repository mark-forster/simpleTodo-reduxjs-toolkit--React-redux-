import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
function Addtodo() {
    const [input, setinput] = useState('');
    const dispatch= useDispatch();


    const addTodoHandler= (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setinput('');
    }
  return (
     <>
     <div className="from">
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder='Enter a todo....'
            value={input}
            onChange={(e)=> setinput(e.target.value)} />
            <button type='submit' style={{marginLeft:"10px", background:"blue"}}>Add</button>
        </form>
     </div>
    </>
  )
}

export default Addtodo