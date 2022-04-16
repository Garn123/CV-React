import "./main.scss";
import { CV } from "./CV";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [change, setChange] = useState(false);
  return (
    <div className="App">
      <Hero hero={hero}/>
      <div className="buttons">
        <button onClick={() => setChange(true)}>Formación</button>
        <button onClick={() => setChange(false)}>Experiencia</button>
      </div>
      {change ? <Education education={education}/> 
      : <Experience experience={experience}/>}      
    </div>
  );
}

export default App;
