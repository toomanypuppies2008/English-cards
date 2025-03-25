import "../Table/table.scss";
import data from "../../data/data.json";
import { useState } from "react";
import TableElement from "../TableElement/TableElement";

export default function Table() {
  const [items, setItems] = useState(data);
  const onDelete = (englishWord) => {
    setItems(items.filter((it) => it.english != englishWord));
  };
  return (
    <main className="table">
      {items.map((el) => (
        <TableElement
          english={el.english}
          transcription={el.transcription}
          russian={el.russian}
          onDelete={onDelete}
        />
      ))}
    </main>
  );
}
