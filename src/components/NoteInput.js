import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',         //number | string | dateString
            title: '',      //string
            body: '',       //string
            archived: false,   //boolean
            createdAt: '',  //string | timestamp
            titleLen: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onTitleKeypressEventHandler = this.onTitleKeypressEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(prevChange => {
            return {
                ...prevChange,
                title: event.target.value,
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(prevChange => {
            return {
                ...prevChange,
                body: event.target.value
            }
        })
    }

    onTitleKeypressEventHandler(event) {
        //[!TODO] - Ga boleh pake maxLength!
        if (event.target.value.length < 50 || event.code === 'Backspace') {
            this.setState(prevChange => {
                return {
                    ...prevChange
                }
            })
        } else {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);

        this.setState({
            id: '',         //number | string | dateString
            title: '',      //string
            body: '',       //string
            archived: false,   //boolean
            createdAt: '',  //string | timestamp
            titleLen: 50
        })
    }

    render() {
        return (
            <div className="note-input">
                <h2 className="note-input__title">Make Your Note:</h2>
                <p className="note-input__title__char-limit">Remaining Character: {50 - this.state.title.length}</p>
                <form className="note-input__body" onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder="Note Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} onKeyDown={this.onTitleKeypressEventHandler} />
                    <textarea placeholder="Note Content" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Take a Note!</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;