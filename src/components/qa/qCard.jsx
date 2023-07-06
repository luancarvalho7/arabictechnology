import { useState } from "react";
export function QCard({ question, answer }) {
  const [cardStatus, setCardStatus] = useState(0);

  function handleAnswer() {
    console.log("FODASE");
    if (cardStatus == 0) {
      setCardStatus(1);
    } else {
      setCardStatus(0);
    }
  }
  return (
    <div className="Qcard" style={{ gap: cardStatus == 0 ? "0px" : "12px" }}>
      <h3>{question}</h3>
      <button className="arrowBtn" onClick={handleAnswer}>
        {" "}
      </button>
      <p
        className="txtP"
        style={{
          height: cardStatus == 0 ? "0px" : "84px",
          marginTop: cardStatus == 0 ? "0px" : "12px",
        }}
      >
        {" "}
        {answer}{" "}
      </p>
    </div>
  );
}
