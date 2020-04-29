export class FilterBy extends React.Component {
    state = {
        filterBy: 'all'
    }

    handleChange = ({ target }) => {
        const { filterBy } = this.state
        const value = target.value
        this.setState({ filterBy: value }, () => this.props.onFilterBy(this.state.filterBy));
    }

    render() {
        return (
            <select name="note-type" onChange={this.handleChange} id="">
                <option value="all">All</option>
                <option value="NoteText">Text Notes</option>
                <option value="NoteList">List Notes</option>
                <option value="NoteImg">Image Notes</option>
                <option value="NoteVideo">Video Notes</option>
            </select>

        )
    }
}

