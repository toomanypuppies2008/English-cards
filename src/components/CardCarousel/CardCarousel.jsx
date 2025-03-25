import { useState } from "react";
import "../CardCarousel/cardCarousel.scss";
import data from "../../data/data.json";
import Card from "../Card/Card";

export default function CardCarousel() {
  const [index, setCard] = useState(0);
  return (
    <div className="mainContainer">
      <div className="carouselContainer">
        <div className="buttonsContainer">
          <button
            className={`carouselButton ${index === 0 ? "hiddenButton" : ""}`}
            onClick={() => setCard((prev) => prev - 1)}
          >
            Назад
          </button>
        </div>
        <div className="cardBlock">
          {data.map((card, i) => {
            if (i === index) {
              return (
                <Card
                  key={card.id}
                  english={card.english}
                  transcription={card.transcription}
                  russian={card.russian}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="buttonsContainer">
          <button
            className="carouselButton"
            onClick={() => setCard((prev) => (prev + 1) % data.length)}
          >
            Вперед
          </button>
        </div>
      </div>
    </div>
  );
}
