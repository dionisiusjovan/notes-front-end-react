import React from "react";
import NoteSubList from "./NoteSubList";

function NoteList({notes, onDelete, onArchive}) {
    return (
        <div className="note-app__body">
            <h2>Notes</h2>
            <NoteSubList notes={notes.filter(note => note.archived === false)} onArchive={onArchive} onDelete={onDelete}/>
            <h2>Archived</h2>
            <NoteSubList notes={notes.filter(note => note.archived === true)} onArchive={onArchive} onDelete={onDelete}/>
        </div>
    )
}

export default NoteList;