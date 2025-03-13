import { useState } from "react";
import "../TableElement/tableElement.scss";
import "../TableElement/edit-inputs.scss";
import SaveButton from "../Buttons/saveButton";
import CancelButton from "../Buttons/cancelButton";
import EditButton from "../Buttons/editButton";
import DeleteButton from "../Buttons/deleteButton";

export default function TableElement({
  english,
  transcription,
  russian,
  onDelete,
}) {
  const [isEdit, setEdit] = useState(false);
  let buttonsShown;

  isEdit
    ? (buttonsShown = (
        <>
          <SaveButton onClick={() => setEdit(false)} />
          <CancelButton onClick={() => setEdit(false)} />
        </>
      ))
    : (buttonsShown = (
        <>
          <EditButton onClick={() => setEdit(true)} />
          <DeleteButton onClick={() => onDelete(english)} />
        </>
      ));
  return (
    <div className="tableElement">
      {isEdit ? (
        <input className="edit-input" value={english} />
      ) : (
        <span className="english">{english}</span>
      )}
      {isEdit ? (
        <input className="edit-input" value={transcription} />
      ) : (
        <span className="transcription">{transcription}</span>
      )}
      {isEdit ? (
        <input className="edit-input" value={russian} />
      ) : (
        <span className="russian">{russian}</span>
      )}
      <span className="buttons">{buttonsShown}</span>
    </div>
  );
}
