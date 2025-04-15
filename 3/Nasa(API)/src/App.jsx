import Main from "./assets/Main" ;
import SideBar from "./assets/SideBar";
import Footer from "./assets/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
 const NASA_KEY = import.meta.env.VITE_NASA_KEY;
const [data,setData] = useState(null) ;
const [loading,setLoading] = useState(false) ;
 const [showModal,setShowMdal] = useState(false) ;
 
 function handleToogleModal(){
  setShowMdal(!showModal)
 }
 useEffect(() => {
    async function fetchAPIData() {
      console.log(NASA_KEY)
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      try{
          const res = await fetch(url);
          const apiData = await res.json()
          setData(apiData)
          console.log('DATA\n', apiData)
      } catch(err) {
        console.log(err.message)
      }

    }
    fetchAPIData() 
 },[])
 return (
    <>
      {data ? (<Main/>) : (
        <div className="loadingState">
              <i className="ri-settings-3-line"></i>
        </div>
      )}
       
       {showModal && (
         <SideBar handleToogleModal={handleToogleModal}/>
       )} 
       {data &&(<Footer handleToogleModal={handleToogleModal}/>)} 
        
    </>
  )
}
 export default App
