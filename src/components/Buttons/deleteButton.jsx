import "./buttons.scss";

export default function DeleteButton({ onClick }) {
  return (
    <button className="deleteButton" onClick={onClick}>
      Удалить
    </button>
  );
}
