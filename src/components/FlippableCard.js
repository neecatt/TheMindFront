import "./flippable-card.css";
import Card from "./card/Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function FlippableCard({ back, front, photo, used }) {
  const [showFront, setShowFront] = useState(true);
  return (
    <div
      className="flippable-card-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          front={front}
          back={back}
          photo={photo}
          used={used}
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
