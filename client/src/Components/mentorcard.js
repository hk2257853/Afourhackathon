import React from 'react'
import { useState } from 'react';

// TODO: add username in the card
// deleteSkill & updateSkill are functions that are passed as props from the skilldisplay component
function Skillcard({props, deleteSkill, updatePost}) {

    const[isediting, setIsediting] = React.useState(false);
    const [domain, setDomain] = useState(props.domain)
    const [skill, setSkill] = useState(props.skill)

    const editSkill = () => {        
        if(isediting)
        {            
            props.domain = domain;
            props.skill = skill;            
            const updatedSkill = { ...props, domain, skill }
            updatePost(props._id, updatedSkill);
            setIsediting(false);
        }
        else setIsediting(true);
    }

    const handleDelete = () =>{
        deleteSkill(props._id)
    }

    const handleChangeDomain = (e) => {
        setDomain(e.target.value)
    }
    const handleChangeSkill = (e) => {
        setSkill(e.target.value)
    }

    return (        
        <div className="card col-md-3">
        <div className="card-header">
          <span className="card-header-h1">{props.skill}</span>
          <span className="icon-container">
              {!isediting && <i onClick={editSkill} className="bi bi-pen"></i>}
              {isediting && <i onClick={editSkill} className="bi bi-check"></i>}
              <i onClick={handleDelete} className="bi bi-trash"></i>
          </span>
        </div>
        <ul className="list-group list-group-flush">
        {isediting && <input onChange={handleChangeSkill} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" type="text" name="skill" id="skill" placeholder="Skill Name" value={skill}/>}
        {isediting && <select onChange = {handleChangeDomain} className="mt-8 my-6 w-64 bg-slate-100 rounded-lg p-2 md:w-1/2 hover:bg-slate:300 focus:bg-gray-200 focus:outline-blue-600 border-gray-300 border-1 border" name="domain" id="domain" value={domain}>
            <option value="tech">Technology</option>
            <option value="business">Business</option>
            <option value="project management">Project Management</option>
        </select>}        
        {!isediting && <li className="list-group-item" style={{marginTop: 5 + 'em'}}>{props.domain}</li>}                            
        </ul>
      </div>

    )
}

export default Skillcard