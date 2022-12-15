import "../assets/styles.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
    <main className="home-container">
      <img className="logo" alt="gym buddy logo" src={require("../assets/logo.png")} />
      <p className="home-text">Need a hand reaching your fitness goals?</p>
      <button onClick= {() => navigate("/form")} data-text="Awesome" className="button">
        <span className="actual-text">&nbsp;Get&nbsp;Started&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
          &nbsp;Get&nbsp;Started&nbsp;
        </span>
      </button>
    </main>
    </>
  );
}
