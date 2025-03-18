
import Filler from "./filler.jsx";
import CustomDatePicker from "./date.jsx";
export default function Experience({index ,ExperienceInfo,handleValueChange, ExpRemove}) {
 

  return (
    <>
      <Filler index={index} title="CompanyName" value={ExperienceInfo.CompanyName} handleValue={handleValueChange} />
      <Filler index={index}  title="Role" value={ExperienceInfo.Role} handleValue={handleValueChange} />
      <Filler index={index} title="Description1" value={ExperienceInfo.Description1} handleValue={handleValueChange} />
      <Filler index={index}  title="Description2" value={ExperienceInfo.Description2} handleValue={handleValueChange} />
      <div className="date">
        <p>From</p>
        <CustomDatePicker index={index}  startDate={ExperienceInfo.From} Title="From" onDateChange={handleValueChange}/>
      </div>

      <div className="date">
        <p>To</p>
        <CustomDatePicker index={index}  startDate={ExperienceInfo.To} Title="To" onDateChange={handleValueChange}/>
      </div>

      <button className="remove" onClick={()=>ExpRemove(index)}>Remove</button>

    </>
  );
}
