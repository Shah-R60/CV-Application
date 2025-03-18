import "./child.css"

export default function SkillPage({ SkillInfo }) {

     return (
          <div className="ExpMainClass">
               <p><strong>Language:</strong> Language:{SkillInfo.Language}</p>
               <p><strong>Technologies:</strong> {SkillInfo.Technologies}</p>
               <p><strong>Databases: </strong> {SkillInfo.Database}</p>
          </div>
     )

}