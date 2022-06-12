import React from "react"

function ArchiveButton({ id, onArchive, flagArchive }) {
    return (
        <button className="note-item__archive-button" onClick={_ => onArchive(id)}>{flagArchive ? 'Activate' : 'Archive'}</button>
    )
}

export default ArchiveButton;