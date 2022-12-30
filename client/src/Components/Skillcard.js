import React from 'react'
import "./index.css"
import * as api from "../api"
import { useLocation } from "react-router";

function Skillcard({props, deleteSkill}) {

    let location = useLocation();

    const editSkill = () => {
        console.log()
        const skillLevel = document.getElementById("skillLevel"+props.id);
        const yearsOfExperience = document.getElementById("yearsOfExperience"+props.id);
        // skillLevel.contentEditable = true;
        // yearsOfExperience.contentEditable = true;
        // api.updatePost(id, post);
    }

    const handleDelete = () =>{
        deleteSkill(props._id)
    }

    return (
        <div className="skillCard flex justify-center">
            <div className="flex flex-row border border-1 rounded-lg items-center w-[40rem] bg-slate-100 hover:bg-gray-100 hover:outline-offset-8" id={"card"}>
                <p id={"skill"} className="px-4 py-3 justify-items-start">{props.skill}</p>
                <p id={"skillLevel"} className="px-4 py-3 justify-items-start" /*contentEditable="false"*/>{props.skillLevel}</p>
                <p id={"yearsOfExperience"} className="px-4 py-3 justify-items-start" /*contentEditable="false"*/>{props.yearsOfExperience}</p>
                <button type="button" id={"edit"} className="px-2 py-3" onClick={editSkill}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/edit--v1.png" alt="" /></button>
                <button type="button" className="px-2 py-3" id={"del"} onClick={handleDelete}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/filled-trash.png" alt="" /></button>
            </div>
        </div>
    )
}

export default Skillcard