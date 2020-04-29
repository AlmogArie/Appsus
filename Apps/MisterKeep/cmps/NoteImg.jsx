const { Link, Route } = ReactRouterDOM

export class NoteImg extends React.Component {
    
    
    render() {
        const note = this.props
        console.log('NoteImg props: ', this.props);
        console.log('NoteImg note: ', note);
        

        return (
            <Link to={`/mkeep/${note.id}`} className="selected-note" note={note}>
                <div className="img-note" onClick={() => this.props.onSelectNote(note)}>
                    <h1>{note.info.title}</h1>
                    <img src={note.info.url} />
                </div>
            </Link>
        )
    }
}


