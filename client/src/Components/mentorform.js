import React,{useState} from 'react'
// import "./index.css"
import * as api from "../api"

function SkillForm() {
    const [domain, setDomain] = useState("tech")
    const [skill, setSkill] = useState("")
    const [hardCoredSkills, setHardCoredSkills] = useState([{"value":"webdevelopment","option":"Web Development"},{"value":"appdevelopment","option":"App Development"},{"value":"datascience","option":"Data Science"}])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            const skillData = {domain, skill}
            console.log(skillData);
            api.createMentorData(skillData)
        } catch (error) {
            console.log(error.message);
        }

    }

    const handleChangeDomain = (e) => {
        setDomain(e.target.value)
        // console.log(domain);
        if (domain === "tech"){
            setHardCoredSkills([{"value":"webdevelopment","option":"Web Development"},{"value":"appdevelopment","option":"App Development"},{"value":"datascience","option":"Data Science"}])
        }
        else if (domain === "business"){
            setHardCoredSkills([{"value":"marketing","option":"Marketing"},{"value":"sales","option":"Sales"},{"value":"finance","option":"Finance"}])
        }
        else if (domain === "project management"){
            setHardCoredSkills([{"value":"pmp","option":"PMP"},{"value":"agile","option":"Agile"},{"value":"scrum","option":"Scrum"}])
        }
        // console.log(hardCoredSkills);
    }

    const handleChangeSkill = (e) => {
        setSkill(e.target.value)
    }

    return (
        <div className="form h-1/2 mx-auto w-1/2 rounded-2xl border border-3 border-gray-800 bg-slate-100 hover:bg-gray-100">
            <form className="flex flex-col items-center">
                <h4 className="mt-4 font-bold text-xl italic">Enter the details</h4>
                <select onChange = {handleChangeDomain} className="mt-8 my-6 w-64 bg-slate-100 rounded-lg p-2 md:w-1/2 hover:bg-slate:300 focus:bg-gray-200 focus:outline-blue-600 border-gray-300 border-1 border" name="domain" id="domain" >
                    <option value="tech">Technology</option>
                    <option value="business">Business</option>
                    <option value="project management">Project Management</option>
                </select>
                <input onChange={handleChangeSkill} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" type="text" name="skill" id="skill" placeholder="Skill Name"/>
                <button type="button" className="py-3 px-4 my-4 text-white bg-blue-500 rounded-2xl hover:bg-blue-800" required onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SkillForm