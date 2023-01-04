import React from 'react'
import "../Components/style.css"
import { useState } from 'react';

function Skillcard({props, deleteSkill, updatePost}) {
    const [isediting, setIsediting] = React.useState(false);
    const [skillLevel, setSkillLevel] = useState(props.skillLevel)
    const [yearsOfExperience, setYearsOfExperience] = useState(props.yearsOfExperience)

    const editSkill = () => {        
        if(isediting)
        {
            props.skillLevel = skillLevel;
            props.yearsOfExperience = yearsOfExperience;            
            const updatedSkill = { ...props, skillLevel, yearsOfExperience }
            updatePost(props._id, updatedSkill);
            setIsediting(false);
        }
        else setIsediting(true);
    }

    const handleDelete = () =>{
        deleteSkill(props._id)
    }

    const handleChangeSkillLevel = (e) => {
        setSkillLevel(e.target.value)
    }
    const handleChangeYearsOfExperience = (e) => {
        setYearsOfExperience(e.target.value)
    }

    return (
        <div class="card col-md-3">
          <div class="card-header">
            <span class="card-header-h1">{props.skill}</span>
            <span class="icon-container">
                {!isediting && <i onClick={editSkill} class="bi bi-pen"></i>}
                {isediting && <i onClick={editSkill} class="bi bi-check"></i>}
                <i onClick={handleDelete} class="bi bi-trash"></i>
            </span>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" style={{marginTop: 5 + 'em'}}>Technology</li>
            {isediting &&
              <select onChange={handleChangeSkillLevel} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" name="skillLevel" id="skillLevel" value={skillLevel}>
                  <option value="basic">Basic</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
              </select> 
              }
              {isediting && <input onChange={handleChangeYearsOfExperience} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" type="number" name="yearsOfExperience" id="yearsOfExperience" placeholder="Years of Experience" min="0" max="100" value={yearsOfExperience}/>}
            {!isediting && <li class="list-group-item">{props.skillLevel}</li>}
            {!isediting && <li class="list-group-item">{props.yearsOfExperience} <span>yrs.</span></li>}
          </ul>
        </div>
    )
}

export default Skillcard