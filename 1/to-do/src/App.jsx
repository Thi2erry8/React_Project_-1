import { useState } from "react";
import TodoInput  from "./assets/components/TodoInput" ;
import TodoList  from "./assets/components/TodoList";
function App() {
   const [todos,setTodos] = useState([]);
  
     function handleAddTodos(newTodo){
       const NewsTodoList = [...todos,newTodo] ;
       setTodos(NewsTodoList)
     }
     
     function handleDeleteTodos(index) {
        const newTodoList = todos.filter((todo,todoIndex) => {
          return todoIndex !== index
        })
        setTodos(newTodoList)
     }
     
     function handleEditTodos(index){

     }

  return (
    <>
       <TodoInput handleAddTodos={handleAddTodos} />
       <TodoList handleDeleteTodos={handleDeleteTodos} todos={todos}/>
    </>
  )
}

export default App
