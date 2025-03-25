import data from "../../data/data.json";
import Card from "../Card/Card";
import "../CardContainer/cardContainer.scss";

export default function CardContainer() {
  return (
    <div className="cardContainer">
      {data.map((card) => (
        <Card
          english={card.english}
          transcription={card.transcription}
          russian={card.russian}
        />
      ))}
    </div>
  );
}
