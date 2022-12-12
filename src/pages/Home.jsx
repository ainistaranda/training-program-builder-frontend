import { RoutedButton as GrommetRoutedButton } from "grommet";
import "../assets/styles.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
    <body className="home-container">
      <img className="logo" src={require("../assets/logo.png")} />
      <p className="home-text">Need a hand reaching your fitness goals?</p>
      <button onClick= {() => navigate("/form")} data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;Get&nbsp;Started&nbsp;</span>
        <span class="hover-text" aria-hidden="true">
          &nbsp;Get&nbsp;Started&nbsp;
        </span>
      </button>
    </body>
    </>
  );
}
{
  /* <GrommetRoutedButton
  className="home-button"
  size="large"
  color="white"
  label="Get Started"
  path="/form"
/>; */
}
