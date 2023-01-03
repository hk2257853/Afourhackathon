import React from 'react'

import { useLocation } from "react-router";
import { useState } from 'react';

// TODO: add username in the card

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
        // <div className="skillCard flex justify-center">
        //     <div className="flex flex-row border border-1 rounded-lg items-center w-[40rem] bg-slate-100 hover:bg-gray-100 hover:outline-offset-8" id={"card"}>
        //         {!isediting && <p id={"skill"} className="px-4 py-3 justify-items-start">{props.skill}</p>}
        //         {!isediting && <p id={"domain"} className="px-4 py-3 justify-items-start">{props.domain}</p>                }
        //         {isediting && <input onChange={handleChangeSkill} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" type="text" name="skill" id="skill" placeholder="Skill Name"/>}
        //         {isediting && <select onChange = {handleChangeDomain} className="mt-8 my-6 w-64 bg-slate-100 rounded-lg p-2 md:w-1/2 hover:bg-slate:300 focus:bg-gray-200 focus:outline-blue-600 border-gray-300 border-1 border" name="domain" id="domain" >
        //             <option value="tech">Technology</option>
        //             <option value="business">Business</option>
        //             <option value="project management">Project Management</option>
        //         </select>}

        //         {!isediting && <button type="button" id={"edit"} className="px-2 py-3" onClick={editSkill}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/edit--v1.png" alt="" /></button>}
        //         {isediting && <button type="button" id={"edit"} className="px-2 py-3" onClick={editSkill}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/filled-trash.png" alt="" /></button>/**? change the img source here based on is editing n delete the above line */} 
        //         <button type="button" className="px-2 py-3" id={"del"} onClick={handleDelete}><img className="h-5 justify-items-end icon-check-sign" src="https://img.icons8.com/ios-glyphs/30/null/filled-trash.png" alt="" /></button>
        //     </div>
        // </div>
        <div class="card col-md-3">
        <div class="card-header">
          <span class="card-header-h1">{props.skill}</span>
          <span class="icon-container">
              {!isediting && <i onClick={editSkill} class="bi bi-pen"></i>}
              {isediting && <i onClick={editSkill} class="bi bi-check"></i>}
              <i onClick={handleDelete} class="bi bi-trash"></i>
          </span>
        </div>
        {/* // TODO: put edit domain up */}
        <ul class="list-group list-group-flush">
        {isediting && <input onChange={handleChangeSkill} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" type="text" name="skill" id="skill" placeholder="Skill Name"/>}
        {isediting && <select onChange = {handleChangeDomain} className="mt-8 my-6 w-64 bg-slate-100 rounded-lg p-2 md:w-1/2 hover:bg-slate:300 focus:bg-gray-200 focus:outline-blue-600 border-gray-300 border-1 border" name="domain" id="domain" >
            <option value="tech">Technology</option>
            <option value="business">Business</option>
            <option value="project management">Project Management</option>
        </select>}        
        {!isediting && <li class="list-group-item" style={{marginTop: 5 + 'em'}}>{props.domain}</li>}                            
        </ul>
      </div>

    )
}

export default Skillcard