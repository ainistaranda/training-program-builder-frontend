import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import ProgramForm from "./components/ProgramForm";
import { Grommet, Box } from "grommet";
import TrainingProgram from "./pages/TrainingProgram";
import ProgramForm from "./pages/ProgramForm";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const theme = {
  global: 
  {
    colors: {
      // brand: "9e2a2b"
      tableBorder: "white"
    },
    font: {
      family: "Montserrat",
      size: "18px",
      height: "20px",
    },
  }
}

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={theme} full>
        <NavBar/>
        <header className="App-header">
          <Routes>
            {/* <Route path="/form" element={<ProgramForm />} /> */}
            <Route path="/form" element={<ProgramForm />} />
            <Route path="/trainingprogram" element={<TrainingProgram />} />
            <Route path="/" element={<Home />} /> 
          </Routes>
        </header>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
