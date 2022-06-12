import React from "react";
import { getData } from "../utils/data";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteNavbar from "./NoteNavbar";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
            tmpNotes: getData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(event) {
        this.setState(_ => {
            return {
                ..._,
                notes: this.state.tmpNotes.filter(note => note.title.toLowerCase().includes(event.target.value.toLowerCase()) )
            }
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        const tmp = this.state.tmpNotes.filter(note => note.id !== id);
        this.setState({ notes: notes, tmpNotes: tmp  });
    }

    onAddNotesHandler({ title, body }) {
        const newEntries = {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false
        }
        this.setState(prevState => {
            return {
                notes: [
                    ...prevState.notes,
                    newEntries
                ],
                tmpNotes: [
                    ...prevState.notes,
                    newEntries
                ]
            }
        })
    }

    onArchivedHandler(id) {
        const note = this.state.notes.filter(note => note.id === id).map(note => note.archived = !note.archived);
        this.setState(prevState => {
            const currentNotesList = [
                ...prevState.notes,
                note
            ]
            return {
                notes: currentNotesList,
                tmpNote: currentNotesList
            }
        })
    }

    render() {
        return (
            <div className="body">
                <NoteNavbar notes={this.state.notes} onQuery={this.onSearchHandler} />
                <div className="note-app__body">
                    <NoteInput addNotes={this.onAddNotesHandler} />
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler} />
                </div>
            </div>
        )
    }
}

export default NoteApp;