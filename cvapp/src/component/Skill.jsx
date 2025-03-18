
import Filler from "./filler.jsx";

export default function Skills({Skills,handleValueChange}) {
  

  return (
    <>
      <Filler title="Language" value={Skills.Language} handleValue={handleValueChange} />
      <Filler title="Technologies" value={Skills.Technologies} handleValue={handleValueChange} />
      <Filler title="Database" value={Skills.Database} handleValue={handleValueChange} />
    </>
  );
}
