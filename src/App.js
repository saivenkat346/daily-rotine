import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import {useSelector} from "react-redux";
import {createtodo} from "./Store/todoSlicer";
import {useDispatch} from "react-redux";




function App() {  
    const [todotext,settodotext] =useState("");
    const todo=useSelector((state)=>state.todo.value);
    const dispatch=useDispatch();

    const addtodo=function() {
      if(todotext!==""){
        if(todo.length===0)
        {
         dispatch(createtodo({id:0,todotext:todotext,iscomplete:"incompleted"}));
         settodotext("");
         document.getElementById("input_box").value="";
        }
        else{
         dispatch(createtodo({id:todo[todo.length-1].id+1,todotext:todotext,iscomplete:"incompleted"}));
         settodotext("");
         document.getElementById("input_box").value="";
        }

      }
    
  
      
    }

  return (
     <>
         <h2>Add todo list</h2>
        <div className='adding-todo'>
        <input type="text" name="" id="input_box" className="input_box" onChange={(e)=>settodotext(e.target.value)} />
        <button className="button" onClick={addtodo}   >Add</button>
        </div>
       <TodoList todo={todo}  />
     </>
  );
}

export default App;
