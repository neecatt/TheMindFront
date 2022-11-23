import "./Card.css";
import "./flip-transition.css";

function Card({ onClick, back, front, photo, used }) {
  return (
    <div className="card" onClick={onClick} style={{}}>
      <div
        className="card-back"
        style={{
          textAlign: "center",
        }}
      >
        <div className="image-name">
          <img
            className=""
            src={photo}
            alt="profileimg"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "10vw",
              height: "10vw",
              marginBottom: "2vw",
              marginTop: "-1vw",
              // marginTop: "5rem",
              borderRadius: "50%",
              border: "2px solid red",
              filter: "drop-shadow(0 0 8px green)",
            }}
          ></img>
          {back}
        </div>
        <div className="role">{used}</div>
      </div>
      <div
        className="card-front"
        style={{
          textAlign: "center",
        }}
      >
        {front}
      </div>
    </div>
  );
}

export default Card;
