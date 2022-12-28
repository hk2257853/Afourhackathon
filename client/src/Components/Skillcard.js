import React from 'react'
import "./index.css"
import * as api from "../api"
import { useLocation } from "react-router";

function Skillcard(props) {

    let location = useLocation();

    const deleteSkill = () => {
        let ans = window.confirm("Are you sure you want to delete?");
        if (ans){
            const card = document.getElementById("card" + props.props._id)
            card.remove()
            // console.log(location.pathname)
            if(location.pathname == "/uskilldata")
            {
                try {
                    api.deleteUserSkill(props.props._id)
                } catch (error) {
                    console.log(error)
                }                
            }
            else
            {
                try {
                    api.deleteMentorData(props.props._id);
                } catch (error) {
                    console.log(error)
                }
            }
        }

    }
    const editSkill = () => {
        const skillLevel = document.getElementById("skillLevel"+props.id);
        const yearsOfExperience = document.getElementById("yearsOfExperience"+props.id);
        skillLevel.contentEditable = true;
        yearsOfExperience.contentEditable = true;
    }
    return (
        <div className="skillCard flex justify-center">
            <div className="flex flex-row border border-1 rounded-lg items-center w-[40rem] bg-slate-100 hover:bg-gray-100 hover:outline-offset-8" id={"card"+props.props._id}>
                <p id={"skill"+props.props._id} className="px-4 py-3 justify-items-start">{props.props.skill}</p>
                <p id={"skillLevel"+props.props._id} className="px-4 py-3 justify-items-start" contentEditable="false">{props.props.skillLevel}</p>
                <p id={"yearsOfExperience"+props.props._id} className="px-4 py-3 justify-items-start" contentEditable="false">{props.props.yearsOfExperience}</p>
                <button type="button" id={"edit" + props.props._id} className="px-2 py-3" onClick={editSkill}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/edit--v1.png" alt="" /></button>
                <button type="button" className="px-2 py-3" id={"del" + props.props._id} onClick={deleteSkill}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/filled-trash.png" alt="" /></button>
            </div>
        </div>
    )
}

export default Skillcard