export class SearchNote extends React.Component {
    state = {
        search: null
    }

    
    handleChange = ({ target }) => {
        const {search} = this.state 
        const value = target.value
        this.setState({ search: value}, ()=> this.props.onSearch(this.state.search));
    }

    render() {
        return (
            <input type="text" placeholder="Search Notes" onChange={this.handleChange} />
        )
    }
}
