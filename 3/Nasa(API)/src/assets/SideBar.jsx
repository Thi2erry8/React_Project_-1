function SideBar(props){
      const{handleToogleModal} = props ;
    return(
         <div onClick={handleToogleModal} className="sidebar">
               <div className="bgOverlay"></div>
              <div className="sidebarContents">
               <h2>The Brutal Martian Landscape</h2>                
                   <div>
                     <p>description</p>
                     <p>bkfbvjzdfkbvfbvjvhdfkbvdkvgsdljvhbm v</p>
               
                   </div>   
             </div>     
         </div>
    )
}
export default SideBar