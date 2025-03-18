
import Filler from "./filler.jsx";
import CustomDatePicker from "./date.jsx";
export default function Experience({ExperienceInfo,handleValueChange}) {
 

  return (
    <>
      <Filler title="CompanyName" value={ExperienceInfo.CompanyName} handleValue={handleValueChange} />
      <Filler title="Role" value={ExperienceInfo.Role} handleValue={handleValueChange} />
      <Filler title="Description1" value={ExperienceInfo.Description1} handleValue={handleValueChange} />
      <Filler title="Description2" value={ExperienceInfo.Description2} handleValue={handleValueChange} />
      <div className="date">
        <p>From</p>
        <CustomDatePicker startDate={ExperienceInfo.From} Title="To" onDateChange={handleValueChange}/>
      </div>

      <div className="date">
        <p>To</p>
        <CustomDatePicker startDate={ExperienceInfo.To} Title="To" onDateChange={handleValueChange}/>
      </div>
     
    </>
  );
}
