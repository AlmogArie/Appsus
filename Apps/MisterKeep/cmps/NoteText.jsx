const { Link, Route } = ReactRouterDOM


export class NoteText extends React.Component {
    
    
    componentDidMount() {
        console.log('Note txt is mounted');
    }

    
    render(){
        const note = this.props
        console.log('note', note);
        
        return(
        <Link to={`/mkeep/${note.id}`} className="selected-note" note={note}>
    
            <div className="txt-note" onClick={()=>this.props.onSelectNote(note)}>
                <h1>{note.info.title}</h1>
                <h2>{note.info.txt}</h2>
            </div>
        </Link>
        )
    }
}