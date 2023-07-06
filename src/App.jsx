import "./App.css";
import { Hero } from "./components/hero/hero";
import { Cta } from "./components/cta/cta";
import { Proof } from "./components/proof/proof";
import { Benefits } from "./components/Benefits/benefits";
import { Method } from "./components/method/method";
import { Bonus } from "./components/bonus/bonus";
import { Guarantee } from "./components/guarantee/guarantee";
import { Qa } from "./components/qa/qa";

function App() {
  return (
    <>
      <Hero />
      <Cta />
      <Proof />
      <Benefits />
      <Method />
      <Bonus />
      <Guarantee />
      <Qa />
    </>
  );
}

export default App;
