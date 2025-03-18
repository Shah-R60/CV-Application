// import { useState } from "react";
import Filler from "./filler.jsx";

export default function Project({ index,ProjectInfo, handleValueChange, ProRemove}) {
  

  return (
    <>
      <Filler index={index} title="Project" value={ProjectInfo.Project} handleValue={handleValueChange} />
      <Filler index={index} title="Link" value={ProjectInfo.Link} handleValue={handleValueChange} />
      <Filler index={index} title="Description1" value={ProjectInfo.Description1} handleValue={handleValueChange} />
      <Filler index={index} title="Description2" value={ProjectInfo.Description2} handleValue={handleValueChange} />

      <button className="remove" onClick={()=>ProRemove(index)}>Remove</button>

    </>
  );
}
