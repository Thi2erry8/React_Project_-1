import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx';
import Generator from './components/Generator.jsx';
import Workout from './components/Workout.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
           <Hero></Hero>
           <Generator></Generator>
           <Workout></Workout>
    </main>
  )
}

export default App
