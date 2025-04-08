function TodoList(){
        let todos = [
         'Go to the gym',
         'Eat more',
         'Pick up the kids from school'
         ] ;  
    
    return(
 
       
       <ul>
              {todos.map((todo,todoIndex)  =>{
                 return(
                    <li key={todoIndex}>{todo}</li>
                 )
              })}
        </ul>
    )
}
export default TodoList