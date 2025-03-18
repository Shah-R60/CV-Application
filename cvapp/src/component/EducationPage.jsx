import "./child.css"

export default function EducationPage({personalInfo}){

     return(
          <div className="main">
               <p className="name">{personalInfo.name}</p>
               <div className="detail">
               <p>{personalInfo.PhoneNumber} &bull; {personalInfo.Email} &bull; {personalInfo.LinkedIn}</p>
               </div>
          </div>
     )

}