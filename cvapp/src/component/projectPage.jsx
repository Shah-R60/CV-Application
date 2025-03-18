import "./child.css"

export default function ProjectPage({ ProjectInfo }) {

     return (
          <div className="ExpMainClass">
               <p><strong><em>{ProjectInfo.Project}</em></strong></p>
               <p>&bull;              {ProjectInfo.Description1}</p>
               <p>&bull;                      {ProjectInfo.Description2}</p>
          </div>
     )

}