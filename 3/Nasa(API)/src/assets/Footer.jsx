function Footer(props){
     const{handleToogleModal} = props ; 
       return(
            <footer>
            <div className="bgGradient"></div>
            <div>
                   <h2>The Brutal Martian Landscape</h2>
                   <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToogleModal}>
                   <i class="ri-information-2-line"></i>
            </button>
            
            </footer>
        )
}
export default Footer