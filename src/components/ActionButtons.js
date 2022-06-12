import React from "react";
import ArchiveButton from "./buttons/ArchiveButton";
import DeleteButton from "./buttons/DeleteButton";

function ActionButton({ id, archived, onArchive, onDelete }) {
    return (
        <div className="note-item__action">
            <ArchiveButton id={id} flagArchive={archived} onArchive={onArchive} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}

export default ActionButton;
