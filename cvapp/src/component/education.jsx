import Filler from "./filler.jsx";
import CustomDatePicker from "./date.jsx";
import "./child.css";


export default function Education({index, EducationalInfo,handleValueChange, removeEducation}) {
  return (
    <>
      <Filler title="College" value={EducationalInfo.College} handleValue={handleValueChange} />
      <Filler title="Degree" value={EducationalInfo.Degree} handleValue={handleValueChange} />
      <Filler title="CGPA" value={EducationalInfo.CGPA} handleValue={handleValueChange} />
      
      <div className="date">
        <p>From</p>
        <CustomDatePicker startDate={EducationalInfo.From} Title="From" onDateChange={handleValueChange}/>
      </div>
      <div className="date">
        <p>To</p>
        <CustomDatePicker startDate={EducationalInfo.To} Title="To" onDateChange={handleValueChange}/>
      </div>
      <button className="remove" onClick={()=>removeEducation(index)}>Remove</button>
    </>
  );
}