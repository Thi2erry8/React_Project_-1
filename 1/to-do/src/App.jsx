import { useState } from "react";
import TodoInput  from "./assets/components/TodoInput" ;
import TodoList  from "./assets/components/TodoList";
function App() {
   const [todos,setTodos] = useState([    
                            'Go to the gym',
                            'Eat more',
                            'Pick up the kids from school']);
  return (
    <>
       <TodoInput />
       <TodoList todos={todos}/>
    </>
  )
}

export default App
