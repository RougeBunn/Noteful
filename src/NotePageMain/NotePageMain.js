import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import Context from '../Context'
import { findNote } from '../notes-helpers'

export default class NotePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = Context

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    const {noteId} = this.props.match.params
    const {notes = [] } = this.context
    const note = findNote(notes, noteId) || {content: ''}
    
    return (
      <section className='NotePageMain'>
        <Note
          id={props.note.id}
          name={props.note.name}
          modified={props.note.modified}
        />
        <div className='NotePageMain__content'>
          {props.note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}