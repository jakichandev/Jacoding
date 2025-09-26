import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Services } from './components/Services'
import { Skills } from './components/Skills'


function App() {
return (
 <>
 <Navbar navState="sm" />
 <Hero />
 <Services />
 <Skills />
</>
      
 
)
}

export default App
