import { Box, Layer } from "grommet";
import { useState } from "react";
import "../assets/styles.css";

export default function MoreInfo() {
  const [show, setShow] = useState();

  return (
    <Box
      className="guide-modal"
      style={{ position: "absolute", left: "1em", bottom: "1em" }}
    >
      <button>
        <span className="button_top" size="small" onClick={() => setShow(true)}>
          More Info
        </span>
      </button>
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <body className="info-body">
            <p>
              To pick an exercise, use the drop down menu. The third option on
              each movement pattern is a no/limited equipment exercise.
            </p>
            <p>
              To add a weight used for the exercise you can input it in the text
              field and it will be saved for that specific exercise.
            </p>
            <p className="rpe-text">RPE</p>
            <p>Rate of Perceived exertion</p>
            <p> 10 — At your max, you have no more reps. </p>
            <p>9 — There’s another rep in the tank, but it’s a grind.</p>
            <p> 8 — You’re beginning to hit your 2-4 rep stride. </p>
            <p>7 — Often, a weight one can move with power (5-7ish reps).</p>
            <p>
              6 — Weight that one can move quickly for speed work (+/- 8 reps
              pending on speed/training goal).
            </p>
            <p> 5 — A weight that someone warms ups. </p>
            <p>
              4 & below — Light weight that can be used for mobility, recovery,
              and form emphasis.
            </p>
          </body>
          <button onClick={() => setShow(false)} className="cta">
            <span>Close</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Layer>
      )}
    </Box>
  );
}
