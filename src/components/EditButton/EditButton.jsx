import "./editButton.scss";

export default function EditButton({ onClick }) {
  return (
    <button className="editButton" onClick={onClick}>
      Редактировать
    </button>
  );
}
