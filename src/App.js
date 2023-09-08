import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grommet } from "grommet";
import ProgramForm from "./pages/ProgramForm";
import Home from "./pages/Home";
import ProgramPage from "./pages/ProgramPage";
import { useState } from "react";
import Login from "./pages/LoginPage";
import { useEffect } from "react";
import NavBar from "./components/NavBar.jsx";

const theme = {
  global: {
    
    colors: {
      tableBorder: "white",
    },
    font: {
      family: "Montserrat",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  useEffect(() => {
  }, [])
  const [user, setUser] = useState()
  return (
    <BrowserRouter>
      <Grommet theme={theme} full>
        <NavBar/>
        {/* <NavBar className="navbar"/> */}
        
        <main>
          <Routes>
            <Route path="/Login" element={<Login setUser={setUser} />} />
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<ProgramForm setUser={setUser} />} />
            <Route path="/trainingprogram" element={<ProgramPage setUser={setUser} user={user} />} />
          </Routes>
        </main>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
