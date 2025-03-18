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
import ProjectPage from "./projectPage.jsx"
import SkillPage from "./SkillPage.jsx"
// import Filler from "./filler.jsx"


export default function Controller() {
  const [activeState, setActive] = useState(-1);
  function handleClick(number) {
    if (activeState == number) {
      setActive(-1);
    }
    else {
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


  const [EducationalInfo, setEducationalInfo] = useState([{
    College: "Example University",
    Degree: " Masters of Engineering, Computer Science",
    CGPA: 9.1,
    To: new Date(),
    From: new Date()
  }]);

  function EducationChnage(index, title, arg) {
    setEducationalInfo(prevInfo => prevInfo.map((info, i) => i === index ? { ...prevInfo, [title]: arg } : info));
  }



  function addEducation() {
    setEducationalInfo(prevInfo => [
      ...prevInfo,
      {
        College: "Example University",
        Degree: " Masters of Engineering, Computer Science",
        CGPA: 9.1,
        To: new Date(),
        From: new Date()
      }
    ])
  }


  function removeEducation(index) {
    setEducationalInfo(prevInfo => prevInfo.filter((_, i) => i !== index));
  }

  const [ExperienceInfo, setExperienceInfo] = useState({
    CompanyName: "XYZ",
    Role: "Software Engineering Inter",
    Description1: "Worked with product managers to re-architect a multi-page web app into a single page web-app, boosting yearly revenue by $1.4M.",
    Description2: "Improved application performance and reduced load time by 30% through code-splitting and lazy loading.",
    From: new Date(),
    To: new Date()
  });

  function ExperienceChange(title, arg) {
    setExperienceInfo(prevInfo => ({ ...prevInfo, [title]: arg }));
  }


  const [ProjectInfo, setProjectInfo] = useState({
    Project: "E-commerce Store",
    Link: "www.github.com",
    Description1: "Developed an online store with a fully functional shopping cart, product search, and checkout process.",
    Description2: "Integrated Stripe API for secure payments and MongoDB for product and order data storage"
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



  return (
    <div className="Main">
      <div className="form">
        <p className="heading">CV GENERATOR</p>
        <p>fill in the detail below</p>
        <div className="buttons">
          <button className="personal" onClick={() => handleClick(0)}>Personal</button>
          {activeState === 0 && <Personal personalInfo={personalInfo} handleValueChange={personalChange} />}

          <div className="per"> 
              <button className="Education" onClick={() => handleClick(1)}>Education</button>
              <button className="rah" onClick={addEducation}>Add</button>
           </div>

              {activeState === 1 && EducationalInfo.map((edu, index) => (
                  <Education key={index} index={index} EducationalInfo={edu} handleValueChange={EducationChnage} removeEducation={removeEducation} />
                ))}
  
          <button className="Experience" onClick={() => handleClick(2)}>Experience</button>
          {activeState === 2 && <Experience ExperienceInfo={ExperienceInfo} handleValueChange={ExperienceChange} />}

          <button className="Projects" onClick={() => handleClick(3)}>Projects</button>
          {activeState === 3 && <Project ProjectInfo={ProjectInfo} handleValueChange={ProjectChange} />}

          <button className="Skills" onClick={() => handleClick(4)}>Skills</button>
          {activeState === 4 && <Skill Skills={Skills} handleValueChange={SkillChange} />}
        </div>
      </div>

      <div className="profile">
        <PersonalPage personalInfo={personalInfo} />
        <p className="heading">EDUCATION</p>
        <hr />

        {EducationalInfo.map((edu, index) => (
          <EducationPage key={index} EducationInfo={edu} />
        ))}

        <p className="heading">EXPERIENCES</p>
        <hr />
        <ExperiencePage ExperienceInfo={ExperienceInfo} />
        <p className="heading">PROJECTS</p>
        <hr />
        <ProjectPage ProjectInfo={ProjectInfo} />
        <p className="heading">SKILLS</p>
        <hr />
        <SkillPage SkillInfo={Skills} />
      </div>
    </div>
  )
}