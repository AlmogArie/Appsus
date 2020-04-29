import keepService from '../keepServices/keepService.js'
import storageService from '../../services/storageService.js'
import { NotesList } from '../cmps/NotesList.jsx'
import { AddNote } from '../cmps/AddNote.jsx'
import { SearchNote } from '../cmps/SearchNote.jsx'
import { FilterBy } from '../cmps/FilterBy.jsx'
import { EditNote } from '../cmps/EditNote.jsx'

const { Link, Route } = ReactRouterDOM



export class Keep extends React.Component {
    state = {
        notes: null,
        selectedNote: null,
        filterBy: null,
        search: null,
        noteIdToEdit: null
    }

    componentDidMount() {
        console.log('CMP Mounted');
        console.log(this.state)
        this.loadNotes();

    }


    onSearch = (str) => {
        let value = str.toLowerCase();
        this.setState({ search: value }, () => this.loadNotes());
    }

    onFilterBy = (value) => {
        console.log('onFilterBy got: ', value);
        this.setState({ filterBy: value }, () => this.loadNotes());
    }

    loadNotes = () => {
        keepService.query(this.state.filterBy, this.state.search)
            .then(notes => {
                this.setState({ notes }, () => console.log('new State: ', this.state)
                )
            })
    }

    onSelectNote = (selectedNote) => {
        this.setState({ selectedNote })
        console.log('selectedNote: ', selectedNote);
        console.log('selectedNoteID: ', selectedNote.id);

    }

    onDelNote = (id) => {
        keepService.delNote(id);
        this.loadNotes();

    }

    onSaveNote = (note) => {
        keepService.addNoteToStorage(note)
        this.loadNotes();
        console.log('onSaveNote is working...');

    }


    render() {
        const { notes, selectedNote } = this.state
        return (
            <main className="keep-main">
                {!selectedNote && 
                <header className="keep-header">
                    <h1>My Brother's Keeper </h1>
                    <SearchNote onSearch={this.onSearch} />
                    <FilterBy onFilterBy={this.onFilterBy} />
                    <AddNote onSaveNote={this.onSaveNote} />

                    {/* <NavLink/> */}
                </header>}
                <div className="juh">
                    {!selectedNote && notes &&
                        <NotesList onSelectNote={this.onSelectNote} onDelNote={this.onDelNote} notes={notes} />}
                    {/* {selectedNote && <Link to={`/mkeep/${selectedNote.id}`} className="selected-note"></Link>} */}
                </div>
            </main>


        )
    }

} 
