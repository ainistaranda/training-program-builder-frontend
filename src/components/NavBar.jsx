import { Box, Menu, Heading } from "grommet";
import { Home, Menu as MenuIcon } from "grommet-icons";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <AppBar
        // background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
        background="black"
      >
        <Heading
          className="heading"
          size="medium"
          level="2"
          margin="none"
          color="white"
        >Gym Buddy
          {/* <img className="navlogo" src={require("../assets/logo.png")} /> */}
        </Heading>
        <Menu
          
          icon={<MenuIcon color="#2d55a6" />}
          // dropBackground="light-2"
          items={[
            { label: "Home", onClick: () => navigate("/") },
            { label: "Sign Up", onClick: () => navigate("/form") },
            { label: "Log in", onClick: () => navigate("/login") },
            { label: "Log out", onClick: () => navigate("/") },
            // { label: 'Log Out', onClick: () => {} },
          ]}
        />
      </AppBar>
    </header>
  );
}
