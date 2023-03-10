import React, { useState } from 'react'
import * as api from "../api"
import * as yup from "yup";

const mentorFormSchema = yup.object().shape({
    domain:yup.string().required(),
    skill: yup.string().required(),
});

function SkillForm() {
    const [domain, setDomain] = useState("")
    const [skill, setSkill] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const skillData = { domain, skill }
        console.log(skillData);
        const isValid = await mentorFormSchema.isValid(skillData)
        console.log(isValid);
        if (!isValid) {
            alert("Please fill all the fields")
            return;
        }
        api.createMentorData(skillData)
            .then((res) => {
                alert("Skill created successfully!")
            })
            .catch(error => {
            if(error.response.data.message) alert(error.response.data.message);
            else alert("Something went wrong, Please try again later");
            });

    }

    const handleChangeDomain = (e) => {
        setDomain(e.target.value)
    }

    const handleChangeSkill = (e) => {
        setSkill(e.target.value)
    }

    const handleReset = () => {
        setDomain("");
        setSkill("");
    }


    return (
        <div className="user-skill-form-main-container flex-container formbg">
            <div className="skill-catalogue flex-container">
                <h1 className="add-skill-h1">Add Skill</h1>
                <div className="catalogue-container flex-container">
                    <form action="" className="needs-validation">
                        <select defaultValue={'DEFAULT'} onChange={handleChangeDomain} className="form-select form-select-lg mb-3 skill-form-form-select" aria-label=".form-select-lg example" id="validationDefault04" required>
                            <option value="DEFAULT" disabled >Select Field</option>
                            <option value="tech">Technology</option>
                            <option value="business">Business</option>
                            <option value="project management">Project Management</option>
                        </select>
                        <input onChange={handleChangeSkill} type="text" className="form-control skill-form-form-select" name="" id="" placeholder="Skill Name" required />
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary skill-form-btn skill-form-add" name="log" value="login">Add</button>
                        <button type="reset" onClick={handleReset} className="btn btn-primary skill-form-btn skill-form-clear" name="log" value="reset">Clear</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SkillForm