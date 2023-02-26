import { useState } from 'react'
import All from './Components/All'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Platform from './Components/Platform'
import Support from './Components/Support'


function App() {
   return(
    <>
        <Navbar />
    <Hero />
    <All />
    <Support />
    <Platform />
    </>

   )
}

export default App
