import Main from "./assets/Main" ;
import SideBar from "./assets/SideBar";
import Footer from "./assets/Footer";
import { useState } from "react";

function App() {
 const [showModal,setShowMdal] = useState(false) ;
 
 function handleToogleModal(){
  setShowMdal(!showModal)
 }
 return (
    <>
        <Main/>
       {showModal && (
         <SideBar handleToogleModal={handleToogleModal}/>
       )}  
        <Footer handleToogleModal={handleToogleModal}/>
    </>
  )
}
 export default App
