import { useState } from "react";
import TodoInput  from "./assets/components/TodoInput" ;
import TodoList  from "./assets/components/TodoList";
function App() {
   const [todos,setTodos] = useState([ ]);
  
     function handleAddTodos(newTodo){
       const NewsTodoList = [...todos,newTodo] ;
       setTodos(NewsTodoList)
     }
 

  return (
    <>
       <TodoInput handleAddTodos={handleAddTodos} />
       <TodoList todos={todos}/>
    </>
  )
}

export default App
