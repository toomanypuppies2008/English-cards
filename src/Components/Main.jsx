import "../Styles/main.scss";
import Table from "./Table";
import data from "../data/data.json";

export default function Main() {
  return (
    <main className="main">
      {data.map((el) => (
        <Table
          english={el.english}
          transcription={el.transcription}
          russian={el.russian}
          isEditModeOff={true}
        />
      ))}
    </main>
  );
}
