import { NotePreview } from './NotePreview.jsx'

export function NotesList(props) {
    return (
        <section className="notes-list">
            {console.log('props: ', props)}  
            {props.notes.map(note => <NotePreview onSelectNote={props.onSelectNote} onDelNote={props.onDelNote} key={note.id} note={note} />)}
            
        </section>
    )
}
