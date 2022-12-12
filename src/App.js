import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import ProgramForm from "./components/ProgramForm";
import { Grommet, Box } from "grommet";
import ProgramForm from "./pages/ProgramForm";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ProgramPage from "./pages/ProgramPage";
import SignUp from "./pages/LoginPage";
import { useState } from "react";
import Login from "./pages/LoginPage";
import { useEffect } from "react";
import HomeTest from "./pages/HomeTest";

const theme = {
  global: {
    
    colors: {
      // brand: "9e2a2b",
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
        <NavBar className="navbar"/>
        <body>
          <Routes>
            <Route path="/Login" element={<Login setUser={setUser} />} />
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<ProgramForm setUser={setUser} />} />
            <Route path="/trainingprogram" element={<ProgramPage setUser={setUser} user={user} />} />
            <Route path="/hometest" element={<HomeTest />} />
          </Routes>
        </body>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
