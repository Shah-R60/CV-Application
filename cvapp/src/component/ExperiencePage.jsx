import "./child.css"

export default function ExperienceInfo({ ExperienceInfo }) {

     return (
          <div className="ExpMainClass">
               <div className="ExpSubClass">
                    <div className="Role">
                         <p><strong><em>{ExperienceInfo.Role}</em></strong></p>
                    </div>
                    <div className="Date">
                    <p><em>{ExperienceInfo.From.toLocaleDateString()} - {ExperienceInfo.To.toLocaleDateString()}</em></p>
                    </div>
               </div>
               <p>{ExperienceInfo.CompanyName}</p>
               <p>&bull;&nbsp;{ExperienceInfo.Description1}</p>
               <p>&bull;&nbsp;{ExperienceInfo.Description2}</p>   
          </div>
     )

}