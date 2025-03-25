import "../Card/card.scss";
import { useState } from "react";

export default function Card({ english, transcription, russian }) {
  let divShown;

  const [isTranslation, setTranslation] = useState(false);

  isTranslation
    ? (divShown = (
        <>
          <p className="translation">{russian}</p>
          <button
            className="hideTranslation"
            onClick={() => {
              setTranslation(false);
            }}
          >
            Скрыть перевод
          </button>
        </>
      ))
    : (divShown = (
        <button
          className="checkTranslation"
          onClick={() => {
            setTranslation(true);
          }}
        >
          Проверить
        </button>
      ));

  return (
    <div className="card">
      <div>
        <p className="englishWord">{english}</p>
      </div>
      <div>
        <p className="cardTranscription">{transcription}</p>
      </div>
      <div>{divShown}</div>
    </div>
  );
}
