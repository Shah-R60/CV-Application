import "./child.css"

export default function PersonalPage({personalInfo}){

     return(
          <div className="main">
               <p className="name">{personalInfo.name}</p>
               <div className="detail">
               <p>{personalInfo.PhoneNumber} &nbsp;&bull;&nbsp; {personalInfo.Email}&nbsp; &bull;&nbsp; {personalInfo.LinkedIn}</p>
               </div>
          </div>
     )

}