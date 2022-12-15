import { Box, Menu, Heading } from "grommet";
import {  Menu as MenuIcon } from "grommet-icons";
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
        background="black"
      >
        <Heading
          className="heading"
          size="medium"
          level="2"
          margin="none"
          color="white"
        >Gym Buddy
        </Heading>
        <Menu
          
          icon={<MenuIcon color="white" />}
          items={[
            { label: "Home", onClick: () => navigate("/") },
            { label: "Sign Up", onClick: () => navigate("/form") },
            { label: "Log in", onClick: () => navigate("/login") },
            { label: "Log out", onClick: () => navigate("/") },
          ]}
        />
      </AppBar>
    </header>
  );
}
