import React from "react";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemContent from "./NoteItemContent";
import ActionButton from "./ActionButtons";

function NoteItem({ id, title, body, createdAt, archived, onArchive, onDelete }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemTitle title={title} createdAt={createdAt} />
                <NoteItemContent body={body} />
            </div>
            <ActionButton id={id} onArchive={onArchive} onDelete={onDelete} archived={archived} />
        </div>
    )
}

export default NoteItem;