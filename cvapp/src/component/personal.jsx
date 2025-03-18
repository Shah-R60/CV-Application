
import Filler from "./filler.jsx";

export default function Personal({personalInfo,handleValueChange}) {

  return (
    <>
      <Filler title="name" value={personalInfo.name} handleValue={handleValueChange} />
      <Filler title="PhoneNumber" value={personalInfo.PhoneNumber} handleValue={handleValueChange} />
      <Filler title="Email" value={personalInfo.Email} handleValue={handleValueChange} />
      <Filler title="LinkedIn" value={personalInfo.LinkedIn} handleValue={handleValueChange} />
    </>
  );
}




