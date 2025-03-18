import { useState } from "react"
import "./controller.css"
import Education from "./education.jsx"
import Experience from "./Experience.jsx"
import Personal from "./personal.jsx"
import Project from "./project.jsx"
import Skill from "./Skill.jsx"
import PersonalPage from "./personalPage.jsx"
import EducationPage from "./EducationPage.jsx"
import CustomDatePicker from "./date.jsx"
import ExperiencePage from "./ExperiencePage.jsx"
// import Filler from "./filler.jsx"


export default function Controller(){
    const [activeState,setActive] = useState(-1);
    function handleClick(number){
        if(activeState==number)
        {
            setActive(-1);
        }
        else{
            setActive(number);
        }
    }

    const [personalInfo, setPersonalInfo] = useState({
        name: "Your Name",
        PhoneNumber: "+123 456 789",
        Email: "example@gmail.com",
        LinkedIn: "linkedIn"
      });
      function personalChange(title, arg) {        
        setPersonalInfo(prevInfo => ({ ...prevInfo, [title]: arg }));
      }


      const [EducationalInfo, setEducationalInfo] = useState({
        College :"Example University",
        Degree : " Master of Engineering , college",
        CGPA : 9.1,
        To : new Date(),
        From: new Date()
      });
    
      function EducationChnage(title, arg) {        
        setEducationalInfo(prevInfo => ({ ...prevInfo, [title]: arg }));  
      }




       const [ExperienceInfo, setExperienceInfo] = useState({
          CompanyName: "XYZ",
          Role: "Software Engineering Inter",
          Description1: "Worked with product manager",
          Description2: "Improved application perfection",
          From: new Date(),
          To: new Date()
        });
      
        function ExperienceChange(title, arg) {        
          setExperienceInfo(prevInfo => ({ ...prevInfo, [title]: arg })); 
        }


        const [ProjectInfo, setProjectInfo] = useState({
            Project: "E-commerce Store",
            Link: "www.github.com",
            Description1: "Developed an online store",
            Description2: "Integrated Stripe Api for sure"
          });
          function ProjectChange(title, arg) {        
            setProjectInfo(prevInfo => ({ ...prevInfo, [title]: arg }));  
          }



          const [Skills, setSkills] = useState({
              Language: "Python, javascript , SQL",
              Technologies: "NOdeJs, Express , ReactJS, Django",
              Database: "PostSQL, MongoDB,MYSQL",
            });
          
            function SkillChange(title, arg) {        
              setSkills(prevInfo => ({ ...prevInfo, [title]: arg }));  
            }

    

return(
 <div className="Main">
    <div className="form">
        <p className="heading">CV GENERATOR</p>
        <p>fill in the detail below</p>
        <div className="buttons">
            <button className="personal" onClick={()=>handleClick(0)}>Personal</button>
            {activeState===0&&<Personal personalInfo={personalInfo} handleValueChange={personalChange}/>}
            {/* {activeState===0&&<Personal personalInfo={personalInfo} handleValueChange={personalChange}/>} */}

            <button className="Education" onClick={()=>handleClick(1)}>Education</button>
            {activeState===1&&<Education EducationalInfo={EducationalInfo} handleValueChange={EducationChnage}/>}
            {/* {activeState===1&&<Education EducationalInfo={EducationalInfo} handleValueChange={EducationChnage}/>} */}


            <button className="Experience" onClick={()=>handleClick(2)}>Experience</button>
            {activeState===2&&<Experience ExperienceInfo={ExperienceInfo} handleValueChange={ExperienceChange}/>}

            <button className="Projects" onClick={()=>handleClick(3)}>Projects</button>
            {activeState===3&&<Project ProjectInfo={ProjectInfo} handleValueChange={ProjectChange} />}

            <button className="Skills" onClick={()=>handleClick(4)}>Skills</button>
            {activeState===4&&<Skill  Skills={Skills} handleValueChange={SkillChange}/>}
        </div>
    </div>

    <div className="profile">
        <PersonalPage personalInfo={personalInfo}/>
        <p className="heading">Education</p>
        <hr  />
        <EducationPage EducationInfo={EducationalInfo}/>
        <p className="heading">Experience</p>
        <hr  />
        <ExperiencePage ExperienceInfo={ExperienceInfo}/> 
        <p className="heading">Projects</p>
        <hr  />
    </div>
    
   
     
     
    
 </div>
)
}