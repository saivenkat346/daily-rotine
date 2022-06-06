import { createSlice } from "@reduxjs/toolkit";


export const todoslicer=createSlice({
    name:"todo",
    initialState:{value:[]},
    reducers:{
          createtodo:(state,action)=>{
              state.value.push(action.payload);
          },
          deletetask:(state,action)=>{
              state.value=state.value.filter((tasks)=>tasks.id!==action.payload);
              
          },
          taskstatus:(state,action)=>{
              state.value.map((task)=>{
                  if(task.id===action.payload.id){
                      task.iscomplete=action.payload.iscomplete;
                  }
              })
          }
          
    },
});


export const {createtodo,deletetask,taskstatus}=todoslicer.actions;

export default todoslicer.reducer;