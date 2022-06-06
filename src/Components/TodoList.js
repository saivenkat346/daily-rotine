import React from 'react'
import Todoitem from './Todoitem'

export default function TodoList(props) {
  
  return (
    <>
     {
        
            props.todo.map((e,ind)=>{return(<Todoitem key={ind} id={e.id} text={e.todotext} iscomplete={e.iscomplete} />)})

     }
    </>
  )
}
