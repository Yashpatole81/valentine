import { useState } from "react";
import "./App.css";
const phrases = [
  "No",
  "Are you sure",
  "Really sure?",
  "Giving you one more chance :)",
  "Please na",
  "Please :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bear-kissing"
            src="https://gifdb.com/images/high/cute-kawaii-brown-bear-kissing-panda-q13n3342odqleq68.webp"
          />
          <div className="text">Yayyyy!!!!! I love you so much</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media1.tenor.com/m/eKomFTTw7a0AAAAC/rose-cute.gif"
          />
          <div> Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
