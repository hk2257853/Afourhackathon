import React from 'react'
import "./index.css"
import { useLocation } from "react-router";
import { useState } from 'react';

function Skillcard({props, deleteSkill, updatePost}) {

    let location = useLocation();
    const[isediting, setIsediting] = React.useState(false);
    const [skillLevel, setSkillLevel] = useState(props.skillLevel)
    const [yearsOfExperience, setYearsOfExperience] = useState(props.yearsOfExperience)

    const editSkill = () => {        
        if(isediting)
        {
            // TODO: shouldn't modfity props directly
            props.skillLevel = skillLevel;
            props.yearsOfExperience = yearsOfExperience;
            // need an updated object with all the props and the new values
            const updatedSkill = { ...props, skillLevel, yearsOfExperience }
            updatePost(props._id, updatedSkill);
            setIsediting(false);
        }
        else setIsediting(true);
        // TODO: 
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
        <div className="skillCard flex justify-center">
            <div className="flex flex-row border border-1 rounded-lg items-center w-[40rem] bg-slate-100 hover:bg-gray-100 hover:outline-offset-8" id={"card"}>
                <p id={"skill"} className="px-4 py-3 justify-items-start">{props.skill}</p>
                
                {!isediting && <p id={"skillLevel"} className="px-4 py-3 justify-items-start">{props.skillLevel}</p>}
                {isediting &&
                <select onChange={handleChangeSkillLevel} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" name="skillLevel" id="skillLevel">
                    <option value="basic">Basic</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                </select> 
                }

                {!isediting && <p id={"yearsOfExperience"} className="px-4 py-3 justify-items-start">{props.yearsOfExperience}</p>}
                {isediting && <input onChange={handleChangeYearsOfExperience} className="my-6 w-64 rounded-lg p-2 md:w-1/2 focus:outline-blue-600 border-gray-300 border-1 border focus:bg-gray-200" type="number" name="yearsOfExperience" id="yearsOfExperience" placeholder="Years of Experience" min="0" max="100"/>}
                
                {!isediting && <button type="button" id={"edit"} className="px-2 py-3" onClick={editSkill}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/edit--v1.png" alt="" /></button>}
                {isediting && <button type="button" id={"edit"} className="px-2 py-3" onClick={editSkill}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/filled-trash.png" alt="" /></button>/**? change the img source here based on is editing n delete the above line */} 
                <button type="button" className="px-2 py-3" id={"del"} onClick={handleDelete}><img className="h-5 justify-items-end icon-check-sign" src="https://img.icons8.com/ios-glyphs/30/null/filled-trash.png" alt="" /></button>
            </div>
        </div>
    )
}

export default Skillcard