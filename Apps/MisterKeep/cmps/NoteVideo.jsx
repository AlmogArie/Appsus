const { Link, Route } = ReactRouterDOM


export class NoteVideo extends React.Component {
    //not working need api
    render() {
        const note = this.props

        return (
            <Link to={`/mkeep/${note.id}`} className="selected-note" >
                <div className="video-note" onClick={()=>this.props.onSelectNote(note)}>
                    <h1>{note.info.title}</h1>
                    <video width="320" height="240" controls>
                        <source src="https://www.youtube.com/watch?v=MPV2METPeJU" type="video/mp4"/>
                        {/* <source src="movie.ogg" type="video/ogg" type="video/mp4"/> */}
                    </video>
                </div>
            </Link>
        )
    }
}

