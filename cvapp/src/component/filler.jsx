import "./controller.css";

export default function Filler({ index ,title, value, handleValue }) {
  function handleChange(e) {
    handleValue(index,title, e.target.value);
  }

  return (
    <div className="fillClass">
      <p>{title}</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
