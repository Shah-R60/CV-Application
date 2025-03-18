
import Filler from "./filler.jsx";

export default function Skills({Skills,handleValueChange}) {
  

  return (
    <>
      <Filler index="index" title="Language" value={Skills.Language} handleValue={handleValueChange} />
      <Filler index="index" title="Technologies" value={Skills.Technologies} handleValue={handleValueChange} />
      <Filler index="index" title="Database" value={Skills.Database} handleValue={handleValueChange} />
    </>
  );
}
