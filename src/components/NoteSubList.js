import React from "react";
import NoteItem from "./NoteItem";

function NoteSubList({ notes, onArchive, onDelete }) {
    return (
        <div className="notes-list">
            { notes.length > 0 
                ? notes.map(note => (
                    <NoteItem {...note} key={note.id} id={note.id} onArchive={onArchive} onDelete={onDelete} />
                ))
                : <p className="notes-list__empty-message">There is nothing found!</p>
            }
        </div>
    )
}

export default NoteSubList;