function Hero(){
   return (
           <div className="min-h-screen flex flex-col gap-10 
                           items-center justify-center text-center max-w-[800px]
                           w-full mx-auto">
                <div className="flex flex-col gap-4">
                 <p>IT'S TIME TO GET</p>
                 <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Swole 
                    <span className="text-blue-400">nornous</span></h1>
                 </div>
                 <p>I hereby acknowledgement that I may become 
                    <span className="text-blue-400 font-med">unbelievably swolenormous</span>
                 and accept all risks of becoming the local 
                 <span className="text-blue-400 font-med">mass montrosity</span> , afflicted with severe body dismorphia, unable to fit through doors.
                 </p>
                 <button className="px-8 py-4 rounded-nd border-[2px]
                 bg-slate-950 border-blue-400 border-solid blueShadow
                 duration-200">
                          <p>Accept & Begin</p>
                 </button>
           </div>
   )
}
export default Hero