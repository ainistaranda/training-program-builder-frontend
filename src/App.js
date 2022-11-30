import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import ProgramForm from "./components/ProgramForm";
import { Grommet } from "grommet";
import TrainingProgram from "./pages/TrainingProgram";
import ProgramForm from "./components/ProgramForm"

const theme = {
  global: 
  {
    colors: {
      // brand: "4066e0"
    },
    font: {
      family: "Montserrat",
      size: "18px",
      height: "50px",
    },
  }
}


function App() {
  return (
    <BrowserRouter>
      <Grommet theme={theme} full>
        <header className="App-header">
          <Routes>
            {/* <Route path="/form" element={<ProgramForm />} /> */}
            <Route path="/form" element={<ProgramForm />} />
            <Route path="/trainingprogram" element={<TrainingProgram />} />
            
          </Routes>
        </header>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
