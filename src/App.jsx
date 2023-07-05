import './App.css'
import { Hero } from './components/hero/hero'
import { Cta } from './components/cta/cta'
import { Proof } from './components/proof/proof'
import { Benefits } from './components/Benefits/benefits'
import { Method } from './components/method/method'
import { Bonus } from './components/bonus/bonus'

function App() {


  return (
    <>
     <Hero/>
     <Cta />
     <Proof/>
     <Benefits/>
     <Method/>
     <Bonus/>
    </>
  )
}

export default App
