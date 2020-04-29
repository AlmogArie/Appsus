export default class EmailSearch extends React.Component {


    state = {
        SearchBy: '',
    }

    handleSearch = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ search: { ...prevState.searchBy, [field]: value } }), () => {
            this.props.onSetSearch(this.state.searchBy)
            
        })
    }

    onSearch = (ev) => {
        ev.preventDefault()
        this.props.onSetSearch(this.state.search)
    }



    render() {
        const {searchBy} = this.state
        return (
            <React.Fragment>
            <form className="search" onSubmit={this.onSearch}>
                <input placeholder="Search email" type="text" name="searchBy" value={searchBy} onChange={this.handleSearch} />
            </form>
            </React.Fragment>
        )
    }

}