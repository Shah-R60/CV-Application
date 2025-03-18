
import Filler from "./filler.jsx";

export default function Personal({personalInfo,handleValueChange}) {

  return (
    <>
      <Filler index="index" title="name" value={personalInfo.name} handleValue={handleValueChange} />
      <Filler index="index" title="PhoneNumber" value={personalInfo.PhoneNumber} handleValue={handleValueChange} />
      <Filler index="index" title="Email" value={personalInfo.Email} handleValue={handleValueChange} />
      <Filler index="index" title="LinkedIn" value={personalInfo.LinkedIn} handleValue={handleValueChange} />
    </>
  );
}




