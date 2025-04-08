import { useState } from "react";

function TodoInput(props){
   const {handleAddTodos} =  props;
   const [todoValue,setTodoValue] = useState('') ;

   return(
    <header>
             <input value={todoValue} 
             onChange={(e) => {
                setTodoValue(e.target.value)
             }}
              placeholder="Enter todo..." />
             <button onClick={() => {
              handleAddTodos(todoValue)
              }}>
              Add
              </button>
    </header>
   )
}
export default TodoInput