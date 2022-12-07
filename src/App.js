import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import ProgramForm from "./components/ProgramForm";
import { Grommet, Box } from "grommet";
import ProgramForm from "./pages/ProgramForm";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import HowToUse from "./components/HowToUse";
import ProgramPage from "./pages/ProgramPage"

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
            <Route path="/trainingprogram" element={<ProgramPage />} />
            {/* <Route path="/trainingprogram" element={<HowToUse />} /> */}
            
            <Route path="/" element={<Home />} /> 
          </Routes>
        </header>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
