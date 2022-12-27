import React from 'react'
import "./index.css"
function Skillcard(props) {

    const deleteSkill = () => {
        let ans = window.confirm("Are you sure you want to delete?");
        if (ans){
            const card = document.getElementById("card" + props.id)
            card.remove()
        }

    }
    const editSkill = () => {
        const skill = document.getElementById("skill"+props.id)
        skill.contentEditable = true
        skill.focus()
    }
    return (
        <div className="skillCard flex justify-center">
            <div className="flex flex-row border border-1 rounded-lg items-center w-[40rem] bg-slate-100 hover:bg-gray-100 hover:outline-offset-8" id={"card"+props.id}>
                <p id={"skill"+props.id} className="px-4 py-3 justify-items-start" contentEditable="false">{props.title}</p>
                <button type="button" id={"edit" + props.id} className="px-2 py-3" onClick={editSkill}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/edit--v1.png" alt="" /></button>
                <button type="button" className="px-2 py-3" id={"del" + props.id} onClick={deleteSkill}><img className="h-5 justify-items-end" src="https://img.icons8.com/ios-glyphs/30/null/filled-trash.png" alt="" /></button>
            </div>
        </div>
    )
}

export default Skillcard