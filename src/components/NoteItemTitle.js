import React from "react";

function NoteItemTitle({ title, createdAt }) {
    let dateString = new Date(createdAt).toLocaleString("en-EN", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
    return (
        <>
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{dateString}</p>
        </>
    )
}
export default NoteItemTitle;