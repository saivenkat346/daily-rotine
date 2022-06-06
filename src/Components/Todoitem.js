import React from 'react'
import './Styles/Todoitemstyle.css';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletetask ,taskstatus} from '../Store/todoSlicer';

export default function Todoitem(props) {

    const [taskcomplete,settask]=useState(props.iscomplete)
    useEffect(()=>{
        settask(props.iscomplete);
    },[props.iscomplete]);

    const dispatch=useDispatch();

  const changetaskstatus=()=>{
     if(props.iscomplete=="incompleted")
     {
      dispatch(taskstatus({id:props.id,todotext:props.text,iscomplete:"completed"}))
     }else{
      dispatch(taskstatus({id:props.id,todotext:props.text,iscomplete:"incompleted"}))
     }
  }
    
    

 
  return (
    <>
      <div className='todo-item'>
      <li className={taskcomplete}>{props.text}</li>
        <button onClick={changetaskstatus}>completed</button>
        <button onClick={()=>{dispatch(deletetask(props.id))}}>Delete</button>
      </div>
    </>
  )
}
