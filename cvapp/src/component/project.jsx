import { useState } from "react";
import Filler from "./filler.jsx";

export default function Project({ProjectInfo, handleValueChange}) {
  

  return (
    <>
      <Filler title="Project" value={ProjectInfo.Project} handleValue={handleValueChange} />
      <Filler title="Link" value={ProjectInfo.Link} handleValue={handleValueChange} />
      <Filler title="Description1" value={ProjectInfo.Description1} handleValue={handleValueChange} />
      <Filler title="Description2" value={ProjectInfo.Description2} handleValue={handleValueChange} />
    </>
  );
}
