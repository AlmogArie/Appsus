import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteList } from './NoteList.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import keepService from '../keepServices/keepService.js'




// function onDelNote(note) {
//     var noteToDel = keepService.getNoteIdxById(note.id);
//     console.log('del: ', noteToDel);
//     keepService.delNote(noteToDel);
//     // keepService.loadNotesFromStorage();

// }

export function NotePreview(props) {
    // const { Link } = ReactRouterDOM
    const { note } = props
    
    console.log('notePreview note: ', note)
    console.log('notePreview props: ', props)

    const DynamicCmp = (note) => {
        switch (note.type) {
            case 'NoteText':
                return <NoteText {...note} onSelectNote={props.onSelectNote}/>
            case 'NoteImg':
                return <NoteImg {...note} onSelectNote={props.onSelectNote}/>
            case 'NoteList':
                return <NoteList {...note} onSelectNote={props.onSelectNote}/>
            case 'NoteVideo':
                return <NoteVideo {...note} onSelectNote={props.onSelectNote}/>
        }
    }

    //debugger
    return (
        
        <div className="note-preview" style={{color: note.display.txtColor, backgroundColor: note.display.bcgColor}}>
            {DynamicCmp(note)}
            <button className="note-dlt-btn" onClick={()=>props.onDelNote(note.id)}>X</button>
        </div>
    )
}

// onClick={()=>props.onSelectNote(note)}

