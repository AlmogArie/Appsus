import keepService from '../keepServices/keepService.js'
import { NotePreview } from '../cmps/NotePreview.jsx'

export class EditNote extends React.Component {
    state = {
        note: null  
    }

    componentDidMount() {
        const { theNoteId } = this.props.match.params
        var note = keepService.getNoteToEdit(theNoteId)
        this.setState({ note }, () => console.log('EditNote setState: ', this.state)
        )

    }

    // componentWillUnMount() {

    // }

    render() {
        const { note } = this.state
        console.log('EditNote note: ', note)


        return (
            <div>
                <h1>Edit</h1>
                {note && <NotePreview note={note} />}
            </div>
        )
    }
}