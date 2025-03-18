import "./child.css"

export default function ExperienceInfo({ ExperienceInfo }) {

     return (
          <div className="ExpMainClass">
               <div className="ExpSubClass">
                    <div className="Role">
                         <p>{ExperienceInfo.Role}</p>
                    </div>
                    <div className="Date">
                    <p>{ExperienceInfo.From.toLocaleDateString()} - {ExperienceInfo.To.toLocaleDateString()}</p>
                    </div>
               </div>
               <p>{ExperienceInfo.CompanyName}</p>
               <p>&bull;{ExperienceInfo.Description1}</p>
               <p>&bull;{ExperienceInfo.Description2}</p>
               
          </div>
     )

}