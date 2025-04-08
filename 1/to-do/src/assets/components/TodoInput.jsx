import { useState } from "react";

function TodoInput(props){
   const {handleAddTodos} =  props;
   const {todoValue,settodoValue} = useState('') ;

   return(
    <header>
             <input  type="text" placeholder="Enter todo..." />
             <button onClick={handleAddTodos(todoValue)}>Add</button>
    </header>
   )
}
export default TodoInput