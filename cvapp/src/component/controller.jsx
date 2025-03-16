import "./controller.css"
import Filler from "./inputField.jsx"


export default function Controller(){
return(
 <div className="Main">
     <p className="heading">CV GENERATOR</p>
     <p>fill in the detail below</p>
     <div className="buttons">
          <button className="personal">Personal</button>
          <div className="presonalDiv">

          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          </div>
          
          <button className="personal">Education</button>
          <div className="presonalDiv">

          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          </div>

          <button className="personal">Experience</button>
          <div className="presonalDiv">
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          </div>

          <button className="personal">Project</button>
          <div className="presonalDiv">
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          </div>

          <button className="personal">Skills</button>
          <div className="presonalDiv">
          <Filler/>
          <Filler/>
          <Filler/>
          </div>

     </div>
     {/* <Filler/> */}
 </div>
)
}