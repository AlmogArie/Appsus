export default class EmailFilter extends React.Component {
  

handleChange = ({ target }) => {
    const value = target.value
    this.setState({ filterBy: value }, () => this.props.onFilterBy(this.state.filterBy));
}

    render() {
        return (
            <section>
                <button onClick={this.handleChange} value="isStarred">Starred </button>
            </section>
        )
    }
}