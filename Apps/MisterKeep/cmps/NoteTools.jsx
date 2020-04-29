// export class NoteTools extends React.Component {
export function NoteTools(props)  {
    
    // render() {
        console.log('tools props are: ', props);
        
        const {note} = props
        console.log('tools got this note:', note);
        
        return (
            <div className="note-tools">
                
                <input type="color" name="bcgColor" value={props.note.display.bcgColor} onChange={props.handleDispInput} /> BCG
                <input type="color" name="txtColor" onChange={props.handleDispInput}/> TXT
                <select name="font" >font
                    <option value="david">David</option>
                    <option value="arial">Arial</option>
                </select>

            </div>
        )
    }
// } 