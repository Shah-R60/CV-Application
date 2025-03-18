import "./child.css"

export default function EducationPage({ EducationInfo }) {

     return (
          <div className="MainClass">
               <div className="SubClass">
                    <div className="degree">
                         <p><strong><em>{EducationInfo.Degree}</em></strong></p>
                    </div>
                    <div className="college">
                    <p>{EducationInfo.College}</p>
                    </div>
               </div>
               <div className="subClass">
                    <div className="Date">
                    <p><em>{EducationInfo.From.toLocaleDateString()} - {EducationInfo.To.toLocaleDateString()}</em></p>
                    </div>
                    <div className="CG">
                         <p>CGPA:{EducationInfo.CGPA}</p>
                    </div>
               </div>
          </div>
     )

}