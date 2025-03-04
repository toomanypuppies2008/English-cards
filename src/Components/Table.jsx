import "../Styles/table.scss";
import CancelButton from "./CancelButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

export default function Table(props) {
  let buttonsShown;
  props.isEditModeOff
    ? (buttonsShown = (
        <>
          <EditButton />
          <DeleteButton />
        </>
      ))
    : (buttonsShown = (
        <>
          <SaveButton />
          <CancelButton />
        </>
      ));
  return (
    <div className="tableElement">
      <span className="english">{props.english}</span>
      <span className="transcription">{props.transcription}</span>
      <span className="russian">{props.russian}</span>
      <span className="buttons">{buttonsShown}</span>
    </div>
  );
}
