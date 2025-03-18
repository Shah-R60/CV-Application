import "./controller.css";

export default function Filler({ title, value, handleValue }) {
  function handleChange(e) {
    handleValue(title, e.target.value);
  }

  return (
    <div className="fillClass">
      <p>{title}</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
