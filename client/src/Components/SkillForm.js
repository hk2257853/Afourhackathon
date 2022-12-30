import React,{useEffect, useState} from 'react'
import "./index.css"
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
        
        try {
            const userSkill = {domain, skill, skillLevel, yearsOfExperience}
            // console.log(userSkill);
            api.createUserSkill(userSkill)
        } catch (error) {
            console.log(error.message);
        }

    }

    const handleChangeDomain = (e) => {
        setDomain(e.target.value)
        const skilloptiondata = skilldata.filter((skilldata)=>{
            return skilldata.domain === domain;
        })
        // console.log(skilloptiondata)
        setSkillOption(skilloptiondata)
        console.log(skillOption)
        console.log(domain)
    }

    const handleChangeSkill = (e) => {
        setSkill(e.target.value)
    }
    const handleChangeSkillLevel = (e) => {
        setSkillLevel(e.target.value)
    }
    const handleChangeYearsOfExperience = (e) => {
        setYearsOfExperience(e.target.value)
    }

    useEffect(()=>{
        try {
            api.getMentorDatas()
          .then((res) => {
              setSkillData(res.data);              
          });
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="form h-1/2 mx-auto w-1/2 rounded-2xl border border-3 border-gray-800 bg-slate-100 hover:bg-gray-100">
            <form className="flex flex-col items-center">
                <h4 className="mt-4 font-bold text-xl italic">Enter the details</h4>
                <select onChange = {handleChangeDomain} className="mt-8 my-6 w-64 bg-slate-100 rounded-lg p-2 md:w-1/2 hover:bg-slate:300 focus:bg-gray-200 focus:outline-blue-600 border-gray-300 border-1 border" name="domain" id="domain" >
                    <option value="tech">Technology</option>
                    <option value="business">Business</option>
                    <option value="project management">Project Management</option>
                </select>
                <select onChange={handleChangeSkill} className="my-6 w-64 rounded-lg p-2 md:w-1/2 bg-slate-100 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" name="skill" id="skill">
                    {
                        skillOption.map((skill)=>{
                            return (<option key={skill._id} value={skill.skill}>{skill.skill}</option>)                            
                        })
                    }
                </select>
                <select onChange={handleChangeSkillLevel} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" name="skillLevel" id="skillLevel">
                    <option value="basic">Basic</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                </select> 
                <input onChange={handleChangeYearsOfExperience} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" type="number" name="yearsOfExperience" id="yearsOfExperience" placeholder="Years of Experience" min="0" max="100"/>
                <button type="button" className="py-3 px-4 my-4 text-white bg-blue-500 rounded-2xl hover:bg-blue-800" required onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SkillForm