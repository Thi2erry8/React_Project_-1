
function TodoCard(props){
    const {children , handleDeleteTodos , index,handleEditTodos} = props ;
        return(
            <li className="todoItem" >
                  {children}
                  <div className="actionscontainer">
                    <button onClick={() =>{
                        handleEditTodos(index)
                    }}>
                             <i className="ri-pencil-line"></i>
                    </button>
                    
                    <button  onClick={() =>{
                        handleDeleteTodos(index)
                    }}>
                            <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                        
             </li>
        )
}
export default TodoCard
