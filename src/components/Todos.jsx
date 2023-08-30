import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const [newtodo, setnewtodo] = useState('')
    const dispatch = useDispatch();



  return (
    <>
      <h1>Todos Lists</h1>
      {todos.map((todo, index) => {
        return (
          <div key={todo.id} style={{display:"flex"}}>
            <p>
              {" "}
              {index + 1} . {todo.text}
              </p>
               <div style={{marginTop:"15px", marginLeft:"10px"}}>
               <input type="text" placeholder="Update todo" onChange={(e)=>setnewtodo(e.target.value)}/>
                <button style={{marginLeft:"10px", background:"green"}}
                onClick={()=>dispatch(updateTodo({id: todo.id, text: newtodo}))}>Update</button>
              <button
                style={{
                  padding: "0px",
                  background: "red",
                  marginLeft: "10px",
                }}
             onClick={()=>dispatch(removeTodo(todo.id))} >
                Delete
              </button>
               </div>
          
          </div>
        );
      })}
    </>
  );
}

export default Todos;
