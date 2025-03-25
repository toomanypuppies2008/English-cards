import "./saveButton.scss";

export default function SaveButton({ onClick }) {
  return (
    <button className="saveButton" onClick={onClick}>
      Сохранить
    </button>
  );
}
