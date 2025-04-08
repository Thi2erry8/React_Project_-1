
function TodoCard(props){
    const {children} = props ;
        return(
            <li className="todoItem" >
                  {children}
                  <div className="actionscontainer">
                        <i className="ri-pencil-line"></i>
                        <i className="ri-delete-bin-line"></i>
                  </div>
                        
             </li>
        )
}
export default TodoCard
