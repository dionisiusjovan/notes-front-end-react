import React from "react";

function NoteNavbar({onQuery}){
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <input className="input" placeholder="Search your notes..." onKeyUp={onQuery}/>
        </div>
    )
}

export default NoteNavbar;