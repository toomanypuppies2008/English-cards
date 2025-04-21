import "./CancelButton.scss";

export default function CancelButton({ onClick }) {
  return (
    <button className="cancelButton" onClick={onClick}>
      Отменить
    </button>
  );
}
