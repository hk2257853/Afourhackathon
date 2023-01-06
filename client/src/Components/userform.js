import React,{useEffect, useState} from 'react'
import "../Components/css/style.css"
import * as api from "../api"

function SkillForm() {
    const [domain, setDomain] = useState("")
    const [skill, setSkill] = useState("")
    const [skillLevel, setSkillLevel] = useState("")
    const [yearsOfExperience, setYearsOfExperience] = useState()
    const [skillOption, setSkillOption] = useState([])
    const [skilldata, setSkillData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const userSkill = {domain, skill, skillLevel, yearsOfExperience}
        api.createUserSkill(userSkill)
        .then((res) => {
            alert("Skill created successfully!")
        })
        .catch(error => {
            console.log(error)
            alert("Something went wrong, Please try again later");
        });

    }

    const handleChangeDomain = (e) => {
        setDomain(e.target.value)
    }

    useEffect(()=>{
        const skilloptiondata = skilldata.filter((skilldata)=>{
            return skilldata.domain === domain;
        })
        setSkillOption(skilloptiondata)
    }, [domain])

    const handleChangeSkill = (e) => {
        setSkill(e.target.value)
    }
    const handleChangeSkillLevel = (e) => {
        setSkillLevel(e.target.value)
    }
    const handleChangeYearsOfExperience = (e) => {
        setYearsOfExperience(e.target.value)
    }

    const handleReset = () => {
        setDomain("");
        setSkill("");
        setSkillLevel("");
        setYearsOfExperience("");
    }


    useEffect(()=>{
        api.getMentorDatas()
        .then((res) => {
            setSkillData(res.data)
        .catch(error => {
          console.log(error)
          });       
        });
    }, [])

    return (
        <div className="user-skill-form-main-container flex-container formbg">
            <div className="skill-catalogue flex-container">
                <h1 className="add-skill-h1">Add Skill</h1>
                <div className="catalogue-container flex-container">
                  <form action="" className="needs-validation">
                    <select defaultValue={'DEFAULT'} onChange = {handleChangeDomain} className="form-select form-select-lg mb-3 skill-form-form-select" aria-label=".form-select-lg example" id="validationDefault04" required>
                      <option value="DEFAULT" disabled >Your Field</option>
                      <option value="tech">Technology</option>
                      <option value="business">Business</option>
                      <option value="project management">Project Management</option>
                    </select>
                    <select defaultValue={'DEFAULT'} onChange={handleChangeSkill} className="form-select form-select-lg mb-3 skill-form-form-select" aria-label=".form-select-lg example" id="validationDefault04" required>
                      <option value="DEFAULT"  disabled >Your Skill</option>
                      {
                        skillOption.map((skill)=>{
                            return (<option key={skill._id} value={skill.skill}>{skill.skill}</option>)                            
                        })
                      }
                    </select>
                    <select defaultValue={'DEFAULT'} onChange={handleChangeSkillLevel} className="form-select form-select-lg mb-3 skill-form-form-select" aria-label=".form-select-lg example" id="validationDefault04" required>
                      <option value="DEFAULT" disabled >Your Expertise Level</option>
                      <option value="basic">Basic</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expert">Expert</option>
                    </select>
                    <input onChange={handleChangeYearsOfExperience} type="number" className="form-control skill-form-form-select" name="" id="" min="0" placeholder="Years of Experience" required/>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary skill-form-btn skill-form-add" name="log" value="login">Add</button>
                    <button type="reset" onClick={handleReset} className="btn btn-primary skill-form-btn skill-form-clear" name="log" value="reset">Clear</button>
                  </form>
                </div>
            </div>
        </div>

    )
}

export default SkillForm